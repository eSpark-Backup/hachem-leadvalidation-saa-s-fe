import {
  Box,
  Button,
  Collapse,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  CARDS,
  FRAUD_SETTINGS,
  LEADS_SETTINGS,
  OPTIONS,
  SYSTEM_SETTING,
} from '../constants/pages/SystemSetting';

import HeaderActions from '../components/report-analytics/HeaderActions';
import ValueSliderCard from '../components/system-settings/ValueSliderCard';
import SettingToggleCard from '../components/system-settings/SettingToggleCard';
import NotFound from './NotFound';

import {
  modalStyle,
  styles,
} from '../styles/components/system-settings/SystemSetting';
import RejectionCard from '../components/system-settings/RejectionCards';
import {
  getDefaultFraudSettings,
  getDefaultLeadSettings,
  updateCardList,
} from '../utils/pages/system-settings/SystemSettings';
import OptionCard from '../components/klaien-managment/OptionCard';

const SystemSetting = () => {
  const [activeBox, setActiveBox] = useState('lead');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null);
  const [formState, setFormState] = useState({ title: '', message: '' });

  const [cards, setCards] = useState(CARDS);

  const [leadSettingsValues, setLeadSettingsValues] = useState(() =>
    getDefaultLeadSettings(LEADS_SETTINGS)
  );

  const [settingsState, setSettingsState] = useState(() =>
    getDefaultFraudSettings(FRAUD_SETTINGS)
  );

  const handleClick = (id) => setActiveBox(id);

  const handleResetLeads = () => {
    setLeadSettingsValues(getDefaultLeadSettings(LEADS_SETTINGS));
  };

  const handleSaveLeads = () => {
    console.log('Lead Settings:', leadSettingsValues);
  };

  const handleResetFraud = () => {
    setSettingsState(getDefaultFraudSettings(FRAUD_SETTINGS));
  };

  const handleSaveFraud = () => {
    console.log('Fraud Settings:', settingsState);
  };

  const handleOpenModal = (card = null) => {
    if (card) {
      setEditingCardId(card.id);
      setFormState({ title: card.title, message: card.message });
    } else {
      setEditingCardId(null);
      setFormState({ title: '', message: '' });
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingCardId(null);
    setFormState({ title: '', message: '' });
  };

  const handleCardSave = () => {
    if (!formState.title || !formState.message) return;

    if (editingCardId !== null) {
      setCards((prev) => updateCardList(prev, editingCardId, formState));
    } else {
      const newCard = {
        id: Date.now(),
        title: formState.title,
        message: formState.message,
      };
      setCards((prev) => [...prev, newCard]);
    }

    handleCloseModal();
  };

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  const handleSaveMessages = () => {
    console.log('Lead Settings:', cards);
  };

  const handleResetMessages = () => {
    console.log('Messages:', cards);
  };

  if (USER_TYPE !== USER_TYPES.admin)
    return <NotFound btnLink={ROUTES.dashboard} />;

  return (
    <>
      <Box sx={styles.outerBox}>
        <HeaderActions title={SYSTEM_SETTING.headerTitle} />
      </Box>

      <Box sx={styles.outerBox}>
        <OptionCard
          data={OPTIONS}
          styles={styles}
          activeBox={activeBox}
          handleClick={handleClick}
        />

        <Collapse in={activeBox === 'lead'}>
          <Box mt={5} p={1}>
            <Typography sx={styles.sectionTitle}>
              {SYSTEM_SETTING.leadSettingsTitle}
            </Typography>
            <Box mt={2}>
              {LEADS_SETTINGS.map((lead, index) => (
                <ValueSliderCard
                  key={index}
                  label={lead.name}
                  tooltip={lead.desc}
                  min={lead.min}
                  max={lead.max}
                  unit={lead.unit}
                  defaultValue={lead.defaultValue}
                  value={leadSettingsValues[lead.key]}
                  onChange={(value) =>
                    setLeadSettingsValues((prev) => ({
                      ...prev,
                      [lead.key]: value,
                    }))
                  }
                />
              ))}
              <Box mt={2} sx={styles.buttonGroup}>
                <Button
                  variant="outlined"
                  onClick={handleResetLeads}
                  sx={styles.resetButton}
                >
                  {SYSTEM_SETTING.reset}
                </Button>
                <Button variant="contained" onClick={handleSaveLeads}>
                  {SYSTEM_SETTING.save}
                </Button>
              </Box>
            </Box>
          </Box>
        </Collapse>

        <Collapse in={activeBox === 'fraud'}>
          <Box mt={5} p={1}>
            <Typography sx={styles.sectionTitle}>
              {SYSTEM_SETTING.fraudDetectionTitle}
            </Typography>
            <Typography sx={styles.sectionSubtitle}>
              {SYSTEM_SETTING.fraudDetectionDesc}
            </Typography>

            <Box mt={2}>
              {FRAUD_SETTINGS.map((setting, index) => (
                <SettingToggleCard
                  key={index}
                  title={setting.title}
                  description={setting.description}
                  icon={setting.icon}
                  initialValue={settingsState[setting.key]}
                  onToggle={(value) =>
                    setSettingsState((prev) => ({
                      ...prev,
                      [setting.key]: value,
                    }))
                  }
                />
              ))}
              <Box mt={2} sx={styles.buttonGroup}>
                <Button
                  variant="outlined"
                  onClick={handleResetFraud}
                  sx={styles.resetButton}
                >
                  {SYSTEM_SETTING.reset}
                </Button>
                <Button variant="contained" onClick={handleSaveFraud}>
                  {SYSTEM_SETTING.save}
                </Button>
              </Box>
            </Box>
          </Box>
        </Collapse>

        <Collapse in={activeBox === 'reject'}>
          <Grid
            container
            spacing={2}
            mt={5}
            p={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={8}>
              <Typography sx={styles.sectionTitle}>
                {SYSTEM_SETTING.rejectionMessagesTitle}
              </Typography>
              <Typography sx={styles.sectionSubtitle}>
                {SYSTEM_SETTING.rejectionMessagesDesc}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md="auto"
              display="flex"
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                onClick={() => handleOpenModal()}
                sx={styles.addButton}
              >
                {SYSTEM_SETTING.addNew}
              </Button>
            </Grid>
          </Grid>

          <Box mt={2}>
            <Stack gap={2}>
              {cards.map((card) => (
                <RejectionCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  message={card.message}
                  setCards={setCards}
                  handleDelete={() => handleDeleteCard(card.id)}
                  handleEdit={() => handleOpenModal(card)}
                />
              ))}
            </Stack>

            <Box mt={2} sx={styles.buttonGroup}>
              <Button
                variant="outlined"
                onClick={handleResetMessages}
                sx={styles.resetButton}
              >
                {SYSTEM_SETTING.reset}
              </Button>
              <Button variant="contained" onClick={handleSaveMessages}>
                {SYSTEM_SETTING.save}
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography
            mb={3}
            sx={{
              fontWeight: 500,
              fontSize: { xs: '24px', sm: '30px', md: '36px' },
              textAlign: 'center',
            }}
          >
            {editingCardId !== null
              ? SYSTEM_SETTING.modalTitleEdit
              : SYSTEM_SETTING.modalTitleAdd}
          </Typography>

          <Typography
            variant="subtitle1"
            mb={1}
            sx={{
              fontWeight: 500,
              fontSize: { xs: '16px', sm: '18px', md: '21px' },
            }}
          >
            {SYSTEM_SETTING.modalReason}
          </Typography>
          <TextField
            fullWidth
            value={formState.title}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder={SYSTEM_SETTING.modalPlaceholderReason}
            variant="outlined"
            sx={{
              mb: 3,
              border: '1.43px solid #00000047',
              borderRadius: '10px',
            }}
          />

          <Typography
            variant="subtitle1"
            mb={1}
            sx={{
              fontWeight: 500,
              fontSize: { xs: '16px', sm: '18px', md: '21px' },
            }}
          >
            {SYSTEM_SETTING.modalTemplate}
          </Typography>
          <TextField
            sx={{
              border: '1.43px solid #00000047',
              borderRadius: '10px',
            }}
            fullWidth
            multiline
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder={SYSTEM_SETTING.modalPlaceholderTemplate}
            variant="outlined"
          />

          <Stack direction="row" justifyContent="flex-end" spacing={2} mt={3}>
            <Button
              variant="outlined"
              onClick={handleCloseModal}
              sx={styles.resetButton}
            >
              {SYSTEM_SETTING.modalCancel}
            </Button>
            <Button variant="contained" onClick={handleCardSave}>
              {SYSTEM_SETTING.modalSave}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default SystemSetting;
