/**
 * Generates an object mapping each lead setting's key to its default value.
 *
 * @param {Array<{ key: string, defaultValue: any }>} LEADS_SETTINGS - Array of lead setting objects, each containing a `key` and a `defaultValue`.
 * @returns {Object} An object where each property is a lead key and its value is the corresponding default value.
 */
const getDefaultLeadSettings = (LEADS_SETTINGS) =>
  Object.fromEntries(
    LEADS_SETTINGS.map((lead) => [lead.key, lead.defaultValue])
  );

/**
 * Generates an object containing the default fraud settings.
 *
 * @param {Array<{ key: string, initialValue: any }>} FRAUD_SETTINGS - An array of fraud setting objects, each with a `key` and an `initialValue`.
 * @returns {Object} An object where each key is a fraud setting key and each value is the corresponding initial value.
 */
const getDefaultFraudSettings = (FRAUD_SETTINGS) =>
  Object.fromEntries(
    FRAUD_SETTINGS.map((setting) => [setting.key, setting.initialValue])
  );

/**
 * Updates a list of cards by merging the form state into the card with the specified editingCardId.
 *
 * @param {Array<Object>} cards - The array of card objects to update.
 * @param {string|number} editingCardId - The ID of the card to update.
 * @param {Object} formState - The new state to merge into the selected card.
 * @returns {Array<Object>} The updated array of card objects.
 */
const updateCardList = (cards, editingCardId, formState) => {
  return cards.map((card) =>
    card.id === editingCardId ? { ...card, ...formState } : card
  );
};

export { getDefaultLeadSettings, getDefaultFraudSettings, updateCardList };
