module.exports = {
  content: ['./src/**/*.{html,js,vue}'], // 指定掃描的檔案
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#E01111',
          2: '#288E3E',
        },
        secondary: {
          1: '#672B11',
          2: '#DBBB76',
          3: '#F3EEE5',
        },  // 次要色
        grayscale: {
          0: '#000000',
          .3: '#EAEAEA',
          1: '#FFFFFF',
        },
      },
      fontFamily: {
        ppCirka: ['PPCirka', 'sans-serif'],
        ppRightDidone: ['PP Right Didone', 'sans-serif']
      }
    },
    screems: {
      sm: '640px',
    }
  },
  plugins: [],
};
