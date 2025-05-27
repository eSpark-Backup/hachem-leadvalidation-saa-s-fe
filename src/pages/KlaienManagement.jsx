import { Box } from '@mui/material';
import { useState } from 'react';
import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';

import HeaderActions from '../components/report-analytics/HeaderActions';
import NotFound from './NotFound';
import OptionCard from '../components/klaien-managment/OptionCard';
import TwilloSetup from '../components/klaien-managment/TwilloSetup';
import AudioSettings from '../components/klaien-managment/AudioSettings';
import ScriptAI from '../components/klaien-managment/ScriptAI';

import { styles } from '../styles/components/system-settings/SystemSetting';
import {
  KLAIEN_MANAGEMENT,
  OPTIONS,
} from '../constants/pages/KlaienManagement';

const KlaienManagement = () => {
  const [activeBox, setActiveBox] = useState(1);

  const handleClick = (id) => setActiveBox(id);

  if (USER_TYPE !== USER_TYPES.admin)
    return <NotFound btnLink={ROUTES.dashboard} />;

  return (
    <>
      <Box sx={styles.outerBox}>
        <HeaderActions title={KLAIEN_MANAGEMENT.title} />
      </Box>

      <Box sx={styles.outerBox}>
        <OptionCard
          data={OPTIONS}
          styles={styles}
          activeBox={activeBox}
          handleClick={handleClick}
        />

        <ScriptAI activeBox={activeBox} />
        <AudioSettings activeBox={activeBox} />
        <TwilloSetup activeBox={activeBox} />
      </Box>
    </>
  );
};

export default KlaienManagement;
