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
      price: 119990,
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
      price: 79990,
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

export const model3Details = {
  model: 'model3',
  displayName: 'Model 3',
  variants: [
    {
      variant: 'PERFORMANCE',
      variantName: 'Performance',
      battery: 'Long Range',
      range: 315,
      wheels: [20],
      cargo: '15 cu ft',
      weight: 4065,
      acceleration: {
        speed: '0-60',
        time: 3.1,
      },
      topSpeed: 162,
      drive: 'Dual Motor',
      superchargingMax: '250 kW max',
      seating: 5,
      onboardChargerMax: '11.5 kW max',
      price: 48190,
    },
    {
      variant: 'LONG_RANGE_AWD',
      variantName: 'Long Range',
      battery: 'Long Range',
      range: 353,
      wheels: [18, 19],
      cargo: '15 cu ft',
      weight: 4065,
      acceleration: {
        speed: '0-60',
        time: 4.2,
      },
      topSpeed: 145,
      drive: 'Dual Motor',
      superchargingMax: '250 kW max',
      seating: 5,
      onboardChargerMax: '11.5 kW max',
      price: 39190,
    },
    {
      variant: 'STANDARD_PLUS',
      variantName: 'Standard Plus',
      battery: 'Standard Range',
      range: 263,
      wheels: [18, 19],
      cargo: '15 cu ft',
      weight: 3582,
      acceleration: {
        speed: '0-60',
        time: 5.3,
      },
      topSpeed: 145,
      drive: 'Rear Wheel',
      superchargingMax: '170 kW max',
      seating: 5,
      onboardChargerMax: '7.6 kW max',
      price: 30190,
    },
  ],
};

export const model3ConfigurationOptions = {
  model: 'model3',
  displayName: 'Model 3',
  variants: [
    {
      variant: 'PERFORMANCE',
      variantName: 'Performance',
      range: 315,
      peakPower: '650 hp',
      wheels: [20],
      cargo: '15 cu ft',
      weight: 4065,
      acceleration: {
        speed: '0-60',
        time: 1.99,
      },
      topSpeed: 200,
      powertrain: 'Tri Motor',
      superchargingMax: '250kW',
      price: 56990,
    },
    {
      variant: 'LONG_RANGE',
      variantName: 'Long Range',
      range: 353,
      peakPower: '520 hp',
      wheels: [18, 19],
      cargo: '15 cu ft',
      weight: 4065,
      acceleration: {
        speed: '0-60',
        time: 4.2,
      },
      topSpeed: 145,
      powertrain: 'Dual Motor',
      superchargingMax: '250kW',
      price: 47990,
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
      name: '20" Überturbine Wheels',
      price: 0,
      default: true,
      src:
        'https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/option-wheels-20-uberturbine.png?&version=v0028d202104080411',
    },
  ],
  selfDriving: {
    available: true,
    default: false,
    price: 10000,
  },
};

export const modelYDetails = {
  model: 'modelY',
  displayName: 'Model Y',
  variants: [
    {
      variant: 'LONG_RANGE',
      variantName: 'Long Range',
      battery: 'Long Range',
      range: 303,
      wheels: [21],
      cargo: '68 cu ft',
      weight: 4416,
      acceleration: {
        speed: '0-60',
        time: 3.5,
      },
      topSpeed: 135,
      drive: 'Dual Motor All-Wheel Drive',
      seating: 5,
      price: 42190,
    },
    {
      variant: 'PERFORMANCE',
      variantName: 'Performance',
      battery: 'Long Range',
      range: 326,
      wheels: [19, 20],
      cargo: '68 cu ft',
      weight: 4416,
      acceleration: {
        speed: '0-60',
        time: 4.8,
      },
      topSpeed: 155,
      drive: 'Dual Motor All-Wheel Drive',
      seating: 7,
      price: 53190,
    },
  ],
};

export const modelXDetails = {
  model: 'modelX',
  displayName: 'Model X',
  variants: [
    {
      variant: 'PLAID',
      variantName: 'Plaid',
      range: 340,
      peakPower: '1,020 hp',
      wheels: [20, 22],
      weight: 5390,
      acceleration: {
        speed: '0-60',
        time: 2.5,
      },
      topSpeed: 163,
      dragCoefficient: '0.24 Cd',
      powertrain: 'Tri Motor',
      superchargingMax: '250 kW',
      towing: 5000,
      seating: 7,
      price: 113190,
    },
    {
      variant: 'LONG_RANGE',
      variantName: 'Long Range',
      range: 360,
      peakPower: '670 hp',
      wheels: [20, 22],
      weight: 5185,
      acceleration: {
        speed: '0-60',
        time: 3.8,
      },
      topSpeed: 155,
      dragCoefficient: '0.24 Cd',
      powertrain: 'Dual Motor',
      superchargingMax: '250 kW',
      towing: 5000,
      seating: 7,
      price: 83190,
    },
  ],
};
