import { Box, Button, Stack, Typography } from '@mui/material';

import GenericTable from '../components/global/table/GenericTable';
import InputField from '../components/leadScoringSetting/InputField';

import {
  ICONS,
  LEAD_SCORING_SETTING,
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
import NotFound from './NotFound';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import { USER_TYPE } from '../utils/auth';

const LeadScoringSetting = () => {
  return (
    <>
      {USER_TYPE === USER_TYPES.client ? (
        <Box px={2}>
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
              {TABLE_HEADER.map((inp, index) => (
                <InputField key={index} placeholder={`Valid ${inp.label}`} />
              ))}
            </Box>

            <Stack gap={1}>
              <Button
                endIcon={<Box component={'img'} src={ICONS.dropdown} />}
                sx={scoringButtonStyles}
              >
                <Box>
                  <Typography variant="body2" sx={validRateStyles}>
                    Validation rate
                  </Typography>

                  <Typography variant="body2" sx={pointsStyles}>
                    +70
                  </Typography>
                </Box>
              </Button>

              <Button sx={actionButtonStyles}>
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
    </>
  );
};

export default LeadScoringSetting;
