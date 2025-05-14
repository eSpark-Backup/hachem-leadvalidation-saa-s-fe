// utils/settingsUtils.js

export const getDefaultLeadSettings = (LEADS_SETTINGS) =>
  Object.fromEntries(
    LEADS_SETTINGS.map((lead) => [lead.key, lead.defaultValue])
  );

export const getDefaultFraudSettings = (FRAUD_SETTINGS) =>
  Object.fromEntries(
    FRAUD_SETTINGS.map((setting) => [setting.key, setting.initialValue])
  );

export const updateCardList = (cards, editingCardId, formState) => {
  return cards.map((card) =>
    card.id === editingCardId ? { ...card, ...formState } : card
  );
};
