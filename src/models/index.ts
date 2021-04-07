export const allModels = {
  totalElements: 4,
  elements: [
    {
      model: 'modelS',
      displayName: 'Model S',
      range: 390,
      acceleration: {
        speed: '0-60',
        time: 1.99,
      },
      topSpeed: 200,
      peakPower: 1020,
    },
    {
      model: 'model3',
      displayName: 'Model 3',
      range: 353,
      acceleration: {
        speed: '0-60',
        time: 3.1,
      },
      AWD: 'Dual Motor',
    },
    {
      model: 'modelX',
      displayName: 'Model X',
      range: 340,
      acceleration: {
        speed: '0-60',
        time: 2.5,
      },
      peakPower: 1020,
    },
    {
      model: 'modelY',
      displayName: 'Model Y',
      range: 326,
      AWD: 'Dual Motor',
    },
  ],
};

export const modelSDetails = {
  model: 'modelS',
  displayName: 'Model S',
  variants: [
    {
      variant: 'PLAID',
      variantName: 'Plaid',
      range: 390,
      peakPower: '1,020 hp',
      wheels: [19, 21],
      cargo: '28 cu ft',
      weight: 4766,
      acceleration: {
        speed: '0-60',
        time: 1.99,
      },
      topSpeed: 200,
      dragCoefficient: '0.208 Cd',
      powertrain: 'Tri Motor',
      superchargingMax: '250kW',
    },
    {
      variant: 'LONG_RANGE',
      variantName: 'Long Range',
      range: 412,
      peakPower: '670 hp',
      wheels: [19, 21],
      cargo: '28 cu ft',
      weight: 4561,
      acceleration: {
        speed: '0-60',
        time: 3.1,
      },
      topSpeed: 155,
      dragCoefficient: '0.208 Cd',
      powertrain: 'Dual Motor',
      superchargingMax: '250kW',
    },
  ],
};

export const modelSConfigurationOptions = {
  model: 'modelS',
  displayName: 'Model S',
  variants: [
    {
      variant: 'PLAID',
      variantName: 'Plaid',
      range: 390,
      peakPower: '1,020 hp',
      wheels: [19, 21],
      cargo: '28 cu ft',
      weight: 4766,
      acceleration: {
        speed: '0-60',
        time: 1.99,
      },
      topSpeed: 200,
      dragCoefficient: '0.208 Cd',
      powertrain: 'Tri Motor',
      superchargingMax: '250kW',
    },
    {
      variant: 'LONG_RANGE',
      variantName: 'Long Range',
      range: 412,
      peakPower: '670 hp',
      wheels: [19, 21],
      cargo: '28 cu ft',
      weight: 4561,
      acceleration: {
        speed: '0-60',
        time: 3.1,
      },
      topSpeed: 155,
      dragCoefficient: '0.208 Cd',
      powertrain: 'Dual Motor',
      superchargingMax: '250kW',
    },
  ],
  paints: [
    {
      name: 'Pearl White',
      price: 0,
      default: true,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_White.png?&version=v0028d202104010407',
    },
    {
      name: 'Metallic Red',
      price: 2500,
      default: false,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Red.png?&version=v0028d202104010407',
    },
    {
      name: 'Solid Black',
      price: 1500,
      default: false,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/Paint_Black.png?&version=v0028d202104010407',
    },
  ],
  wheels: [
    {
      name: '19" Tempest Wheels',
      price: 0,
      default: true,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/ui_swat_whl_tempest.png?&version=v0028d202104010407',
    },
    {
      name: '21" Arachnid Wheels',
      price: 4500,
      default: false,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/21Arachnid.png?&version=v0028d202104010407',
    },
  ],
  selfDriving: {
    available: true,
    default: false,
    price: 10000,
  },
};
