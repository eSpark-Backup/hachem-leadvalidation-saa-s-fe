const KLAIEN_MANAGEMENT = { title: 'Klairn Call Management' };

const TWILLO_DATA = {
  accountSid: '',
  token: '',
  phoneNumber: '',
  callTimeout: '',
  voiceDetection: true,
  callRecordings: true,
};

const SCRIPT_AI = {
  scriptAI: 'Script AI',
  generateAI: 'Generate AI',
  saveScript: 'Save Script',
};

const AUDIO_SETTINGS = {
  sliders: {
    start: 'Slow',
    end: 'Fast',
  },
  toggles: [
    { title: 'Voice Enhancement', state: true },
    { title: 'Noice Deduction', state: true },
  ],
};

const TWILLO_SETUP = {
  twilioTitle: 'Twilio Credentials',
  accountSid: 'Account SID',
  accountSidPlaceholder: 'Enter your Twilio SID',
  token: 'Token',
  tokenPlaceholder: 'Enter your Token Number',
  phoneNumber: 'Twilio Phone Number',
  phoneNumberPlaceholder: '+44 (123) 456-9878',
  callTitle: 'Call Settings',
  timeout: 'Call Time Out (sec)',
  timeoutPlaceholder: '30',
  voiceDetection: 'Voice Detection',
  callRecordings: 'Call Recordings',
};

const OPTIONS = [
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

const AUDIO_PREVIEW = [
  {
    title: 'Audio Preview',
    description: 'Listen to your script with different voice settings',
    icon: '/src/assets/images/system-setting/sheild-icon.svg',
    initialValue: true,
    key: 'audio-preview',
  },
];

const SPEED_SETTINGS = [
  {
    key: 'speed',
    name: 'Speed',
    defaultValue: 30,
    unit: 'pts',
    min: 0,
    max: 100,
  },
];

const VOICE_SETTINGS = [
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

export {
  AUDIO_PREVIEW,
  SPEED_SETTINGS,
  VOICE_SETTINGS,
  OPTIONS,
  TWILLO_SETUP,
  AUDIO_SETTINGS,
  SCRIPT_AI,
  TWILLO_DATA,
  KLAIEN_MANAGEMENT,
};
