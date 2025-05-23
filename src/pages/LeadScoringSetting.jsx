import { useEffect, useState } from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';

import GenerateAILeadModal from '../components/leadScoringSetting/GenerateAILeadModal';
import ScoringModal from '../components/leadScoringSetting/ScoringModal';
import InputField from '../components/leadScoringSetting/InputField';
import GenericTable from '../components/global/table/GenericTable';

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
import { useNavigate } from 'react-router-dom';

const LeadScoringSetting = () => {
  const [scoringModal, setScoringModal] = useState(false);

  const [generatAiModal, setGeneratAiModal] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.client) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const handleOpenScoringModal = () => setScoringModal(true);

  const handleOpenGeneratedAIModal = () => {
    setScoringModal(false);
    setGeneratAiModal(true);
  };

  const handleCloseModal = () => {
    setScoringModal(false);
    setGeneratAiModal(false);
  };

  if (USER_TYPE !== USER_TYPES.client) return null;

  const TitleBoxStyles = { marginTop: { xs: '24px', sm: '8px' } };

  const TitleStyles = {
    ...tableHeadingStyles,
    fontWeight: 600,
  };

  return (
    <>
      <Box sx={TitleBoxStyles}>
        <Typography variant="h1" sx={TitleStyles}>
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

        <GenericTable columns={TABLE_HEADER} data={TABLE_BODY} noBg hasPoints />
      </Box>

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
