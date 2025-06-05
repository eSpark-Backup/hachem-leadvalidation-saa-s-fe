/**
 * Generates default lead settings from a list of lead setting definitions.
 *
 * @param {Array<{ key: string, defaultValue: any }>} LEADS_SETTINGS - Array of lead setting objects.
 * @returns {Object} An object mapping each setting's key to its default value.
 */
const getDefaultLeadSettings = (LEADS_SETTINGS) =>
  Object.fromEntries(
    LEADS_SETTINGS.map((lead) => [lead.key, lead.defaultValue])
  );

/**
 * Generates default fraud settings from a list of fraud setting definitions.
 *
 * @param {Array<{ key: string, initialValue: any }>} FRAUD_SETTINGS - Array of fraud setting objects.
 * @returns {Object} An object mapping each setting's key to its initial value.
 */
const getDefaultFraudSettings = (FRAUD_SETTINGS) =>
  Object.fromEntries(
    FRAUD_SETTINGS.map((setting) => [setting.key, setting.initialValue])
  );

/**
 * Updates a list of cards by replacing the card with the given ID with updated form state.
 *
 * @param {Array<Object>} cards - The original array of card objects.
 * @param {string|number} editingCardId - The ID of the card to update.
 * @param {Object} formState - The new data to merge into the target card.
 * @returns {Array<Object>} A new array of cards with the updated card.
 */
const updateCardList = (cards, editingCardId, formState) => {
  return cards.map((card) =>
    card.id === editingCardId ? { ...card, ...formState } : card
  );
};

export { getDefaultLeadSettings, getDefaultFraudSettings, updateCardList };
