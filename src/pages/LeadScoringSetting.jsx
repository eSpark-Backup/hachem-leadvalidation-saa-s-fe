import { useState, useEffect } from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material';

import GenerateAILeadModal from '../components/leadScoringSetting/GenerateAILeadModal';
import ScoringModal from '../components/leadScoringSetting/ScoringModal';
import InputField from '../components/leadScoringSetting/InputField';
import GenericTable from '../components/global/table/GenericTable';
import NotFound from './NotFound';

import { USER_TYPE } from '../utils/auth';

import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  ICONS,
  LEAD_SCORING_SETTING,
  SCORING_SETTINGS,
  TABLE_BODY,
  TABLE_HEADER,
} from '../constants/pages/LeadsScoring';

import { tableHeadingStyles } from '../styles/components/globals/table/Table';
import {
  actionButtonStyles,
  pointsStyles,
  scoringButtonStyles,
  scoringInputBoxStyles,
  stackContainerStyles,
  validRateStyles,
} from '../styles/pages/LeadScoringSetting';
import {
  useFetchLeadScoringSettingsQuery,
  useUpdateLeadScoringSettingsMutation,
} from '../redux/slices/client/leadsScoringSetting';

const LeadScoringSetting = () => {
  const [scoringModal, setScoringModal] = useState(false);
  const [generatAiModal, setGeneratAiModal] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    data: settingsData,
    isLoading,
    isError,
    error,
  } = useFetchLeadScoringSettingsQuery();
  const [updateSettings] = useUpdateLeadScoringSettingsMutation();

  const handleOpenScoringModal = () => setScoringModal(true);

  const handleOpenGeneratedAIModal = async () => {
    try {
      const result = await updateSettings(formData);

      if ('data' in result) {
        // Successfully updated, update local state with response
        setFormData(result.data);
      } else if ('error' in result) {
        // Handle error (optional)
        console.error('Update failed:', result.error);
      }

      setScoringModal(false);
      setGeneratAiModal(true);
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  const handleCloseModal = () => {
    setScoringModal(false);
    setGeneratAiModal(false);
  };

  const userType =
    USER_TYPE == undefined ? localStorage.getItem('userType') : USER_TYPE;

  // Initialize formData from API once fetched
  useEffect(() => {
    if (settingsData) {
      setFormData(settingsData);
    }
  }, [settingsData]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <p>Error loading settings: {error?.data?.message || 'Unknown error'}</p>
      </Box>
    );
  }

  return (
    <>
      {userType === USER_TYPES.client ? (
        <Box sx={{ marginTop: { xs: '24px', sm: '8px' } }}>
          <Typography
            variant="h1"
            sx={{
              ...tableHeadingStyles,
              fontWeight: 600,
            }}
          >
            {LEAD_SCORING_SETTING.title}
          </Typography>

          <Stack sx={stackContainerStyles}>
            <Box sx={scoringInputBoxStyles}>
              {SCORING_SETTINGS.map((inp, index) => (
                <InputField
                  key={index}
                  placeholder={inp.placeholder}
                  incWidth={inp.name === 'mandatory_fields'}
                  type={inp.type}
                  name={inp.name}
                  value={formData[inp.name] || ''}
                  onChange={(e) => handleChange(inp.name, e.target.value)}
                />
              ))}
            </Box>

            <Stack gap={1}>
              <Button
                endIcon={<Box component={'img'} src={ICONS.dropdown} />}
                sx={scoringButtonStyles}
              >
                <Box>
                  <Typography variant="body2" sx={validRateStyles}>
                    {LEAD_SCORING_SETTING.rate}
                  </Typography>

                  <Typography variant="body2" sx={pointsStyles}>
                    {LEAD_SCORING_SETTING.points}
                  </Typography>
                </Box>
              </Button>

              <Button sx={actionButtonStyles} onClick={handleOpenScoringModal}>
                {LEAD_SCORING_SETTING.buttonText}
              </Button>
            </Stack>
          </Stack>

          <GenericTable
            columns={TABLE_HEADER}
            data={TABLE_BODY}
            noBg
            hasPoints
          />
        </Box>
      ) : (
        <NotFound btnLink={ROUTES.dashboard} />
      )}

      <ScoringModal
        open={scoringModal}
        handleClose={handleCloseModal}
        startGeneratedAI={handleOpenGeneratedAIModal}
      />

      <GenerateAILeadModal
        open={generatAiModal}
        handleClose={handleCloseModal}
      />
    </>
  );
};

export default LeadScoringSetting;
