export const OPTIONS = [
  {
    id: 1,
    label: 'Script AI',
    icon: '/src/assets/images/system-setting/gear-icon.svg',
  },
  {
    id: 2,
    label: 'Audio Preview',
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
  },
  {
    id: 3,
    label: 'Twilio Setup',
    icon: '/src/assets/images/system-setting/message-icon.svg',
  },
];

export const AUDIO_PREVIEW = [
  {
    title: 'Audio Preview',
    description: 'Listen to your script with different voice settings',
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
    initialValue: true,
    key: 'audio-preview',
  },
];

export const SPEED_SETTINGS = [
  {
    key: 'speed',
    name: 'Speed',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
];

export const VOICE_SETTINGS = [
  {
    key: 'voice-type',
    name: 'Voice Type',
    defaultValue: 'male-voice',
    opions: [
      { name: 'Male Voice', value: 'male-voice' },
      { name: 'Female Voice', value: 'female-voice' },
    ],
  },
  {
    key: 'language',
    name: 'Language',
    defaultValue: 'english',
    opions: [
      { name: 'English', value: 'english' },
      { name: 'Spanish', value: 'spanish' },
    ],
  },
];
