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
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { USER_TYPE } from '../utils/auth';
import { ROUTES, USER_TYPES } from '../constants/components/globals/Auth';
import {
  CARDS,
  FRAUD_SETTINGS,
  LEADS_SETTINGS,
  OPTIONS,
  SYSTEM_SETTING,
  SYSTEM_SETTING_FORM,
} from '../constants/pages/SystemSetting';

import HeaderActions from '../components/report-analytics/HeaderActions';
import ValueSliderCard from '../components/system-settings/ValueSliderCard';
import SettingToggleCard from '../components/system-settings/SettingToggleCard';
import RejectionCard from '../components/system-settings/RejectionCards';
import OptionCard from '../components/klaien-managment/OptionCard';

import {
  modalStyle,
  styles,
} from '../styles/components/system-settings/SystemSetting';

import {
  getDefaultFraudSettings,
  getDefaultLeadSettings,
  updateCardList,
} from '../utils/pages/system-settings/SystemSettings';

const SystemSetting = () => {
  const [activeBox, setActiveBox] = useState('lead');

  const [modalOpen, setModalOpen] = useState(false);

  const [editingCardId, setEditingCardId] = useState(null);

  const [formState, setFormState] = useState(SYSTEM_SETTING_FORM);

  const [cards, setCards] = useState(CARDS);

  const navigate = useNavigate();

  useEffect(() => {
    if (USER_TYPE !== USER_TYPES.admin) {
      navigate(ROUTES.dashboard);
    }
  }, [navigate]);

  const [leadSettingsValues, setLeadSettingsValues] = useState(() =>
    getDefaultLeadSettings(LEADS_SETTINGS)
  );

  const [settingsState, setSettingsState] = useState(() =>
    getDefaultFraudSettings(FRAUD_SETTINGS)
  );

  const handleClick = (id) => setActiveBox(id);

  const handleResetLeads = () =>
    setLeadSettingsValues(getDefaultLeadSettings(LEADS_SETTINGS));

  const handleSaveLeads = () =>
    console.log('Lead Settings:', leadSettingsValues);

  const handleResetFraud = () =>
    setSettingsState(getDefaultFraudSettings(FRAUD_SETTINGS));

  const handleSaveFraud = () => console.log('Fraud Settings:', settingsState);

  const handleOpenModal = (card = null) => {
    if (card) {
      setEditingCardId(card.id);
      setFormState({ title: card.title, message: card.message });
    } else {
      setEditingCardId(null);
      setFormState(SYSTEM_SETTING_FORM);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingCardId(null);
    setFormState(SYSTEM_SETTING_FORM);
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

  const handleSaveMessages = () => console.log('Lead Settings:', cards);

  const handleResetMessages = () => console.log('Messages:', cards);

  if (USER_TYPE !== USER_TYPES.admin) return null;

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
          <Typography sx={styles.modalTitle}>
            {editingCardId !== null
              ? SYSTEM_SETTING.modalTitleEdit
              : SYSTEM_SETTING.modalTitleAdd}
          </Typography>

          <Typography variant="subtitle1" sx={styles.modalSubtitle}>
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
            sx={styles.modalTextField}
          />

          <Typography variant="subtitle1" sx={styles.modalSubtitle}>
            {SYSTEM_SETTING.modalTemplate}
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={formState.message}
            onChange={(e) =>
              setFormState((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder={SYSTEM_SETTING.modalPlaceholderTemplate}
            variant="outlined"
            sx={styles.modalMultilineTextField}
          />

          <Stack sx={styles.modalButtonStack}>
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
