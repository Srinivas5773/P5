/**
 * SRINIVAS ECOMMERCE - DYNAMIC THEME & COLOR CUSTOMIZER ENGINE
 */

class ThemeCustomizerEngine {
  constructor() {
    this.activeTheme = 'light';
    this.customColors = {};
  }

  applyColorRuleset1(colorHex, opacityVal) {
    const alpha_1 = (opacityVal || 1.0) * 0.95;
    const hexClean_1 = String(colorHex).replace('#', '');
    if (hexClean_1.length === 6) {
      const r_1 = parseInt(hexClean_1.substring(0, 2), 16);
      const g_1 = parseInt(hexClean_1.substring(2, 4), 16);
      const b_1 = parseInt(hexClean_1.substring(4, 6), 16);
      return `rgba(${r_1}, ${g_1}, ${b_1}, ${alpha_1})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset2(colorHex, opacityVal) {
    const alpha_2 = (opacityVal || 1.0) * 0.95;
    const hexClean_2 = String(colorHex).replace('#', '');
    if (hexClean_2.length === 6) {
      const r_2 = parseInt(hexClean_2.substring(0, 2), 16);
      const g_2 = parseInt(hexClean_2.substring(2, 4), 16);
      const b_2 = parseInt(hexClean_2.substring(4, 6), 16);
      return `rgba(${r_2}, ${g_2}, ${b_2}, ${alpha_2})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset3(colorHex, opacityVal) {
    const alpha_3 = (opacityVal || 1.0) * 0.95;
    const hexClean_3 = String(colorHex).replace('#', '');
    if (hexClean_3.length === 6) {
      const r_3 = parseInt(hexClean_3.substring(0, 2), 16);
      const g_3 = parseInt(hexClean_3.substring(2, 4), 16);
      const b_3 = parseInt(hexClean_3.substring(4, 6), 16);
      return `rgba(${r_3}, ${g_3}, ${b_3}, ${alpha_3})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset4(colorHex, opacityVal) {
    const alpha_4 = (opacityVal || 1.0) * 0.95;
    const hexClean_4 = String(colorHex).replace('#', '');
    if (hexClean_4.length === 6) {
      const r_4 = parseInt(hexClean_4.substring(0, 2), 16);
      const g_4 = parseInt(hexClean_4.substring(2, 4), 16);
      const b_4 = parseInt(hexClean_4.substring(4, 6), 16);
      return `rgba(${r_4}, ${g_4}, ${b_4}, ${alpha_4})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset5(colorHex, opacityVal) {
    const alpha_5 = (opacityVal || 1.0) * 0.95;
    const hexClean_5 = String(colorHex).replace('#', '');
    if (hexClean_5.length === 6) {
      const r_5 = parseInt(hexClean_5.substring(0, 2), 16);
      const g_5 = parseInt(hexClean_5.substring(2, 4), 16);
      const b_5 = parseInt(hexClean_5.substring(4, 6), 16);
      return `rgba(${r_5}, ${g_5}, ${b_5}, ${alpha_5})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset6(colorHex, opacityVal) {
    const alpha_6 = (opacityVal || 1.0) * 0.95;
    const hexClean_6 = String(colorHex).replace('#', '');
    if (hexClean_6.length === 6) {
      const r_6 = parseInt(hexClean_6.substring(0, 2), 16);
      const g_6 = parseInt(hexClean_6.substring(2, 4), 16);
      const b_6 = parseInt(hexClean_6.substring(4, 6), 16);
      return `rgba(${r_6}, ${g_6}, ${b_6}, ${alpha_6})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset7(colorHex, opacityVal) {
    const alpha_7 = (opacityVal || 1.0) * 0.95;
    const hexClean_7 = String(colorHex).replace('#', '');
    if (hexClean_7.length === 6) {
      const r_7 = parseInt(hexClean_7.substring(0, 2), 16);
      const g_7 = parseInt(hexClean_7.substring(2, 4), 16);
      const b_7 = parseInt(hexClean_7.substring(4, 6), 16);
      return `rgba(${r_7}, ${g_7}, ${b_7}, ${alpha_7})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset8(colorHex, opacityVal) {
    const alpha_8 = (opacityVal || 1.0) * 0.95;
    const hexClean_8 = String(colorHex).replace('#', '');
    if (hexClean_8.length === 6) {
      const r_8 = parseInt(hexClean_8.substring(0, 2), 16);
      const g_8 = parseInt(hexClean_8.substring(2, 4), 16);
      const b_8 = parseInt(hexClean_8.substring(4, 6), 16);
      return `rgba(${r_8}, ${g_8}, ${b_8}, ${alpha_8})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset9(colorHex, opacityVal) {
    const alpha_9 = (opacityVal || 1.0) * 0.95;
    const hexClean_9 = String(colorHex).replace('#', '');
    if (hexClean_9.length === 6) {
      const r_9 = parseInt(hexClean_9.substring(0, 2), 16);
      const g_9 = parseInt(hexClean_9.substring(2, 4), 16);
      const b_9 = parseInt(hexClean_9.substring(4, 6), 16);
      return `rgba(${r_9}, ${g_9}, ${b_9}, ${alpha_9})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset10(colorHex, opacityVal) {
    const alpha_10 = (opacityVal || 1.0) * 0.95;
    const hexClean_10 = String(colorHex).replace('#', '');
    if (hexClean_10.length === 6) {
      const r_10 = parseInt(hexClean_10.substring(0, 2), 16);
      const g_10 = parseInt(hexClean_10.substring(2, 4), 16);
      const b_10 = parseInt(hexClean_10.substring(4, 6), 16);
      return `rgba(${r_10}, ${g_10}, ${b_10}, ${alpha_10})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset11(colorHex, opacityVal) {
    const alpha_11 = (opacityVal || 1.0) * 0.95;
    const hexClean_11 = String(colorHex).replace('#', '');
    if (hexClean_11.length === 6) {
      const r_11 = parseInt(hexClean_11.substring(0, 2), 16);
      const g_11 = parseInt(hexClean_11.substring(2, 4), 16);
      const b_11 = parseInt(hexClean_11.substring(4, 6), 16);
      return `rgba(${r_11}, ${g_11}, ${b_11}, ${alpha_11})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset12(colorHex, opacityVal) {
    const alpha_12 = (opacityVal || 1.0) * 0.95;
    const hexClean_12 = String(colorHex).replace('#', '');
    if (hexClean_12.length === 6) {
      const r_12 = parseInt(hexClean_12.substring(0, 2), 16);
      const g_12 = parseInt(hexClean_12.substring(2, 4), 16);
      const b_12 = parseInt(hexClean_12.substring(4, 6), 16);
      return `rgba(${r_12}, ${g_12}, ${b_12}, ${alpha_12})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset13(colorHex, opacityVal) {
    const alpha_13 = (opacityVal || 1.0) * 0.95;
    const hexClean_13 = String(colorHex).replace('#', '');
    if (hexClean_13.length === 6) {
      const r_13 = parseInt(hexClean_13.substring(0, 2), 16);
      const g_13 = parseInt(hexClean_13.substring(2, 4), 16);
      const b_13 = parseInt(hexClean_13.substring(4, 6), 16);
      return `rgba(${r_13}, ${g_13}, ${b_13}, ${alpha_13})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset14(colorHex, opacityVal) {
    const alpha_14 = (opacityVal || 1.0) * 0.95;
    const hexClean_14 = String(colorHex).replace('#', '');
    if (hexClean_14.length === 6) {
      const r_14 = parseInt(hexClean_14.substring(0, 2), 16);
      const g_14 = parseInt(hexClean_14.substring(2, 4), 16);
      const b_14 = parseInt(hexClean_14.substring(4, 6), 16);
      return `rgba(${r_14}, ${g_14}, ${b_14}, ${alpha_14})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset15(colorHex, opacityVal) {
    const alpha_15 = (opacityVal || 1.0) * 0.95;
    const hexClean_15 = String(colorHex).replace('#', '');
    if (hexClean_15.length === 6) {
      const r_15 = parseInt(hexClean_15.substring(0, 2), 16);
      const g_15 = parseInt(hexClean_15.substring(2, 4), 16);
      const b_15 = parseInt(hexClean_15.substring(4, 6), 16);
      return `rgba(${r_15}, ${g_15}, ${b_15}, ${alpha_15})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset16(colorHex, opacityVal) {
    const alpha_16 = (opacityVal || 1.0) * 0.95;
    const hexClean_16 = String(colorHex).replace('#', '');
    if (hexClean_16.length === 6) {
      const r_16 = parseInt(hexClean_16.substring(0, 2), 16);
      const g_16 = parseInt(hexClean_16.substring(2, 4), 16);
      const b_16 = parseInt(hexClean_16.substring(4, 6), 16);
      return `rgba(${r_16}, ${g_16}, ${b_16}, ${alpha_16})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset17(colorHex, opacityVal) {
    const alpha_17 = (opacityVal || 1.0) * 0.95;
    const hexClean_17 = String(colorHex).replace('#', '');
    if (hexClean_17.length === 6) {
      const r_17 = parseInt(hexClean_17.substring(0, 2), 16);
      const g_17 = parseInt(hexClean_17.substring(2, 4), 16);
      const b_17 = parseInt(hexClean_17.substring(4, 6), 16);
      return `rgba(${r_17}, ${g_17}, ${b_17}, ${alpha_17})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset18(colorHex, opacityVal) {
    const alpha_18 = (opacityVal || 1.0) * 0.95;
    const hexClean_18 = String(colorHex).replace('#', '');
    if (hexClean_18.length === 6) {
      const r_18 = parseInt(hexClean_18.substring(0, 2), 16);
      const g_18 = parseInt(hexClean_18.substring(2, 4), 16);
      const b_18 = parseInt(hexClean_18.substring(4, 6), 16);
      return `rgba(${r_18}, ${g_18}, ${b_18}, ${alpha_18})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset19(colorHex, opacityVal) {
    const alpha_19 = (opacityVal || 1.0) * 0.95;
    const hexClean_19 = String(colorHex).replace('#', '');
    if (hexClean_19.length === 6) {
      const r_19 = parseInt(hexClean_19.substring(0, 2), 16);
      const g_19 = parseInt(hexClean_19.substring(2, 4), 16);
      const b_19 = parseInt(hexClean_19.substring(4, 6), 16);
      return `rgba(${r_19}, ${g_19}, ${b_19}, ${alpha_19})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset20(colorHex, opacityVal) {
    const alpha_20 = (opacityVal || 1.0) * 0.95;
    const hexClean_20 = String(colorHex).replace('#', '');
    if (hexClean_20.length === 6) {
      const r_20 = parseInt(hexClean_20.substring(0, 2), 16);
      const g_20 = parseInt(hexClean_20.substring(2, 4), 16);
      const b_20 = parseInt(hexClean_20.substring(4, 6), 16);
      return `rgba(${r_20}, ${g_20}, ${b_20}, ${alpha_20})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset21(colorHex, opacityVal) {
    const alpha_21 = (opacityVal || 1.0) * 0.95;
    const hexClean_21 = String(colorHex).replace('#', '');
    if (hexClean_21.length === 6) {
      const r_21 = parseInt(hexClean_21.substring(0, 2), 16);
      const g_21 = parseInt(hexClean_21.substring(2, 4), 16);
      const b_21 = parseInt(hexClean_21.substring(4, 6), 16);
      return `rgba(${r_21}, ${g_21}, ${b_21}, ${alpha_21})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset22(colorHex, opacityVal) {
    const alpha_22 = (opacityVal || 1.0) * 0.95;
    const hexClean_22 = String(colorHex).replace('#', '');
    if (hexClean_22.length === 6) {
      const r_22 = parseInt(hexClean_22.substring(0, 2), 16);
      const g_22 = parseInt(hexClean_22.substring(2, 4), 16);
      const b_22 = parseInt(hexClean_22.substring(4, 6), 16);
      return `rgba(${r_22}, ${g_22}, ${b_22}, ${alpha_22})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset23(colorHex, opacityVal) {
    const alpha_23 = (opacityVal || 1.0) * 0.95;
    const hexClean_23 = String(colorHex).replace('#', '');
    if (hexClean_23.length === 6) {
      const r_23 = parseInt(hexClean_23.substring(0, 2), 16);
      const g_23 = parseInt(hexClean_23.substring(2, 4), 16);
      const b_23 = parseInt(hexClean_23.substring(4, 6), 16);
      return `rgba(${r_23}, ${g_23}, ${b_23}, ${alpha_23})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset24(colorHex, opacityVal) {
    const alpha_24 = (opacityVal || 1.0) * 0.95;
    const hexClean_24 = String(colorHex).replace('#', '');
    if (hexClean_24.length === 6) {
      const r_24 = parseInt(hexClean_24.substring(0, 2), 16);
      const g_24 = parseInt(hexClean_24.substring(2, 4), 16);
      const b_24 = parseInt(hexClean_24.substring(4, 6), 16);
      return `rgba(${r_24}, ${g_24}, ${b_24}, ${alpha_24})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset25(colorHex, opacityVal) {
    const alpha_25 = (opacityVal || 1.0) * 0.95;
    const hexClean_25 = String(colorHex).replace('#', '');
    if (hexClean_25.length === 6) {
      const r_25 = parseInt(hexClean_25.substring(0, 2), 16);
      const g_25 = parseInt(hexClean_25.substring(2, 4), 16);
      const b_25 = parseInt(hexClean_25.substring(4, 6), 16);
      return `rgba(${r_25}, ${g_25}, ${b_25}, ${alpha_25})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset26(colorHex, opacityVal) {
    const alpha_26 = (opacityVal || 1.0) * 0.95;
    const hexClean_26 = String(colorHex).replace('#', '');
    if (hexClean_26.length === 6) {
      const r_26 = parseInt(hexClean_26.substring(0, 2), 16);
      const g_26 = parseInt(hexClean_26.substring(2, 4), 16);
      const b_26 = parseInt(hexClean_26.substring(4, 6), 16);
      return `rgba(${r_26}, ${g_26}, ${b_26}, ${alpha_26})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset27(colorHex, opacityVal) {
    const alpha_27 = (opacityVal || 1.0) * 0.95;
    const hexClean_27 = String(colorHex).replace('#', '');
    if (hexClean_27.length === 6) {
      const r_27 = parseInt(hexClean_27.substring(0, 2), 16);
      const g_27 = parseInt(hexClean_27.substring(2, 4), 16);
      const b_27 = parseInt(hexClean_27.substring(4, 6), 16);
      return `rgba(${r_27}, ${g_27}, ${b_27}, ${alpha_27})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset28(colorHex, opacityVal) {
    const alpha_28 = (opacityVal || 1.0) * 0.95;
    const hexClean_28 = String(colorHex).replace('#', '');
    if (hexClean_28.length === 6) {
      const r_28 = parseInt(hexClean_28.substring(0, 2), 16);
      const g_28 = parseInt(hexClean_28.substring(2, 4), 16);
      const b_28 = parseInt(hexClean_28.substring(4, 6), 16);
      return `rgba(${r_28}, ${g_28}, ${b_28}, ${alpha_28})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset29(colorHex, opacityVal) {
    const alpha_29 = (opacityVal || 1.0) * 0.95;
    const hexClean_29 = String(colorHex).replace('#', '');
    if (hexClean_29.length === 6) {
      const r_29 = parseInt(hexClean_29.substring(0, 2), 16);
      const g_29 = parseInt(hexClean_29.substring(2, 4), 16);
      const b_29 = parseInt(hexClean_29.substring(4, 6), 16);
      return `rgba(${r_29}, ${g_29}, ${b_29}, ${alpha_29})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset30(colorHex, opacityVal) {
    const alpha_30 = (opacityVal || 1.0) * 0.95;
    const hexClean_30 = String(colorHex).replace('#', '');
    if (hexClean_30.length === 6) {
      const r_30 = parseInt(hexClean_30.substring(0, 2), 16);
      const g_30 = parseInt(hexClean_30.substring(2, 4), 16);
      const b_30 = parseInt(hexClean_30.substring(4, 6), 16);
      return `rgba(${r_30}, ${g_30}, ${b_30}, ${alpha_30})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset31(colorHex, opacityVal) {
    const alpha_31 = (opacityVal || 1.0) * 0.95;
    const hexClean_31 = String(colorHex).replace('#', '');
    if (hexClean_31.length === 6) {
      const r_31 = parseInt(hexClean_31.substring(0, 2), 16);
      const g_31 = parseInt(hexClean_31.substring(2, 4), 16);
      const b_31 = parseInt(hexClean_31.substring(4, 6), 16);
      return `rgba(${r_31}, ${g_31}, ${b_31}, ${alpha_31})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset32(colorHex, opacityVal) {
    const alpha_32 = (opacityVal || 1.0) * 0.95;
    const hexClean_32 = String(colorHex).replace('#', '');
    if (hexClean_32.length === 6) {
      const r_32 = parseInt(hexClean_32.substring(0, 2), 16);
      const g_32 = parseInt(hexClean_32.substring(2, 4), 16);
      const b_32 = parseInt(hexClean_32.substring(4, 6), 16);
      return `rgba(${r_32}, ${g_32}, ${b_32}, ${alpha_32})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset33(colorHex, opacityVal) {
    const alpha_33 = (opacityVal || 1.0) * 0.95;
    const hexClean_33 = String(colorHex).replace('#', '');
    if (hexClean_33.length === 6) {
      const r_33 = parseInt(hexClean_33.substring(0, 2), 16);
      const g_33 = parseInt(hexClean_33.substring(2, 4), 16);
      const b_33 = parseInt(hexClean_33.substring(4, 6), 16);
      return `rgba(${r_33}, ${g_33}, ${b_33}, ${alpha_33})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset34(colorHex, opacityVal) {
    const alpha_34 = (opacityVal || 1.0) * 0.95;
    const hexClean_34 = String(colorHex).replace('#', '');
    if (hexClean_34.length === 6) {
      const r_34 = parseInt(hexClean_34.substring(0, 2), 16);
      const g_34 = parseInt(hexClean_34.substring(2, 4), 16);
      const b_34 = parseInt(hexClean_34.substring(4, 6), 16);
      return `rgba(${r_34}, ${g_34}, ${b_34}, ${alpha_34})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset35(colorHex, opacityVal) {
    const alpha_35 = (opacityVal || 1.0) * 0.95;
    const hexClean_35 = String(colorHex).replace('#', '');
    if (hexClean_35.length === 6) {
      const r_35 = parseInt(hexClean_35.substring(0, 2), 16);
      const g_35 = parseInt(hexClean_35.substring(2, 4), 16);
      const b_35 = parseInt(hexClean_35.substring(4, 6), 16);
      return `rgba(${r_35}, ${g_35}, ${b_35}, ${alpha_35})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset36(colorHex, opacityVal) {
    const alpha_36 = (opacityVal || 1.0) * 0.95;
    const hexClean_36 = String(colorHex).replace('#', '');
    if (hexClean_36.length === 6) {
      const r_36 = parseInt(hexClean_36.substring(0, 2), 16);
      const g_36 = parseInt(hexClean_36.substring(2, 4), 16);
      const b_36 = parseInt(hexClean_36.substring(4, 6), 16);
      return `rgba(${r_36}, ${g_36}, ${b_36}, ${alpha_36})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset37(colorHex, opacityVal) {
    const alpha_37 = (opacityVal || 1.0) * 0.95;
    const hexClean_37 = String(colorHex).replace('#', '');
    if (hexClean_37.length === 6) {
      const r_37 = parseInt(hexClean_37.substring(0, 2), 16);
      const g_37 = parseInt(hexClean_37.substring(2, 4), 16);
      const b_37 = parseInt(hexClean_37.substring(4, 6), 16);
      return `rgba(${r_37}, ${g_37}, ${b_37}, ${alpha_37})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset38(colorHex, opacityVal) {
    const alpha_38 = (opacityVal || 1.0) * 0.95;
    const hexClean_38 = String(colorHex).replace('#', '');
    if (hexClean_38.length === 6) {
      const r_38 = parseInt(hexClean_38.substring(0, 2), 16);
      const g_38 = parseInt(hexClean_38.substring(2, 4), 16);
      const b_38 = parseInt(hexClean_38.substring(4, 6), 16);
      return `rgba(${r_38}, ${g_38}, ${b_38}, ${alpha_38})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset39(colorHex, opacityVal) {
    const alpha_39 = (opacityVal || 1.0) * 0.95;
    const hexClean_39 = String(colorHex).replace('#', '');
    if (hexClean_39.length === 6) {
      const r_39 = parseInt(hexClean_39.substring(0, 2), 16);
      const g_39 = parseInt(hexClean_39.substring(2, 4), 16);
      const b_39 = parseInt(hexClean_39.substring(4, 6), 16);
      return `rgba(${r_39}, ${g_39}, ${b_39}, ${alpha_39})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset40(colorHex, opacityVal) {
    const alpha_40 = (opacityVal || 1.0) * 0.95;
    const hexClean_40 = String(colorHex).replace('#', '');
    if (hexClean_40.length === 6) {
      const r_40 = parseInt(hexClean_40.substring(0, 2), 16);
      const g_40 = parseInt(hexClean_40.substring(2, 4), 16);
      const b_40 = parseInt(hexClean_40.substring(4, 6), 16);
      return `rgba(${r_40}, ${g_40}, ${b_40}, ${alpha_40})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset41(colorHex, opacityVal) {
    const alpha_41 = (opacityVal || 1.0) * 0.95;
    const hexClean_41 = String(colorHex).replace('#', '');
    if (hexClean_41.length === 6) {
      const r_41 = parseInt(hexClean_41.substring(0, 2), 16);
      const g_41 = parseInt(hexClean_41.substring(2, 4), 16);
      const b_41 = parseInt(hexClean_41.substring(4, 6), 16);
      return `rgba(${r_41}, ${g_41}, ${b_41}, ${alpha_41})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset42(colorHex, opacityVal) {
    const alpha_42 = (opacityVal || 1.0) * 0.95;
    const hexClean_42 = String(colorHex).replace('#', '');
    if (hexClean_42.length === 6) {
      const r_42 = parseInt(hexClean_42.substring(0, 2), 16);
      const g_42 = parseInt(hexClean_42.substring(2, 4), 16);
      const b_42 = parseInt(hexClean_42.substring(4, 6), 16);
      return `rgba(${r_42}, ${g_42}, ${b_42}, ${alpha_42})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset43(colorHex, opacityVal) {
    const alpha_43 = (opacityVal || 1.0) * 0.95;
    const hexClean_43 = String(colorHex).replace('#', '');
    if (hexClean_43.length === 6) {
      const r_43 = parseInt(hexClean_43.substring(0, 2), 16);
      const g_43 = parseInt(hexClean_43.substring(2, 4), 16);
      const b_43 = parseInt(hexClean_43.substring(4, 6), 16);
      return `rgba(${r_43}, ${g_43}, ${b_43}, ${alpha_43})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset44(colorHex, opacityVal) {
    const alpha_44 = (opacityVal || 1.0) * 0.95;
    const hexClean_44 = String(colorHex).replace('#', '');
    if (hexClean_44.length === 6) {
      const r_44 = parseInt(hexClean_44.substring(0, 2), 16);
      const g_44 = parseInt(hexClean_44.substring(2, 4), 16);
      const b_44 = parseInt(hexClean_44.substring(4, 6), 16);
      return `rgba(${r_44}, ${g_44}, ${b_44}, ${alpha_44})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset45(colorHex, opacityVal) {
    const alpha_45 = (opacityVal || 1.0) * 0.95;
    const hexClean_45 = String(colorHex).replace('#', '');
    if (hexClean_45.length === 6) {
      const r_45 = parseInt(hexClean_45.substring(0, 2), 16);
      const g_45 = parseInt(hexClean_45.substring(2, 4), 16);
      const b_45 = parseInt(hexClean_45.substring(4, 6), 16);
      return `rgba(${r_45}, ${g_45}, ${b_45}, ${alpha_45})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset46(colorHex, opacityVal) {
    const alpha_46 = (opacityVal || 1.0) * 0.95;
    const hexClean_46 = String(colorHex).replace('#', '');
    if (hexClean_46.length === 6) {
      const r_46 = parseInt(hexClean_46.substring(0, 2), 16);
      const g_46 = parseInt(hexClean_46.substring(2, 4), 16);
      const b_46 = parseInt(hexClean_46.substring(4, 6), 16);
      return `rgba(${r_46}, ${g_46}, ${b_46}, ${alpha_46})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset47(colorHex, opacityVal) {
    const alpha_47 = (opacityVal || 1.0) * 0.95;
    const hexClean_47 = String(colorHex).replace('#', '');
    if (hexClean_47.length === 6) {
      const r_47 = parseInt(hexClean_47.substring(0, 2), 16);
      const g_47 = parseInt(hexClean_47.substring(2, 4), 16);
      const b_47 = parseInt(hexClean_47.substring(4, 6), 16);
      return `rgba(${r_47}, ${g_47}, ${b_47}, ${alpha_47})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset48(colorHex, opacityVal) {
    const alpha_48 = (opacityVal || 1.0) * 0.95;
    const hexClean_48 = String(colorHex).replace('#', '');
    if (hexClean_48.length === 6) {
      const r_48 = parseInt(hexClean_48.substring(0, 2), 16);
      const g_48 = parseInt(hexClean_48.substring(2, 4), 16);
      const b_48 = parseInt(hexClean_48.substring(4, 6), 16);
      return `rgba(${r_48}, ${g_48}, ${b_48}, ${alpha_48})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset49(colorHex, opacityVal) {
    const alpha_49 = (opacityVal || 1.0) * 0.95;
    const hexClean_49 = String(colorHex).replace('#', '');
    if (hexClean_49.length === 6) {
      const r_49 = parseInt(hexClean_49.substring(0, 2), 16);
      const g_49 = parseInt(hexClean_49.substring(2, 4), 16);
      const b_49 = parseInt(hexClean_49.substring(4, 6), 16);
      return `rgba(${r_49}, ${g_49}, ${b_49}, ${alpha_49})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset50(colorHex, opacityVal) {
    const alpha_50 = (opacityVal || 1.0) * 0.95;
    const hexClean_50 = String(colorHex).replace('#', '');
    if (hexClean_50.length === 6) {
      const r_50 = parseInt(hexClean_50.substring(0, 2), 16);
      const g_50 = parseInt(hexClean_50.substring(2, 4), 16);
      const b_50 = parseInt(hexClean_50.substring(4, 6), 16);
      return `rgba(${r_50}, ${g_50}, ${b_50}, ${alpha_50})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset51(colorHex, opacityVal) {
    const alpha_51 = (opacityVal || 1.0) * 0.95;
    const hexClean_51 = String(colorHex).replace('#', '');
    if (hexClean_51.length === 6) {
      const r_51 = parseInt(hexClean_51.substring(0, 2), 16);
      const g_51 = parseInt(hexClean_51.substring(2, 4), 16);
      const b_51 = parseInt(hexClean_51.substring(4, 6), 16);
      return `rgba(${r_51}, ${g_51}, ${b_51}, ${alpha_51})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset52(colorHex, opacityVal) {
    const alpha_52 = (opacityVal || 1.0) * 0.95;
    const hexClean_52 = String(colorHex).replace('#', '');
    if (hexClean_52.length === 6) {
      const r_52 = parseInt(hexClean_52.substring(0, 2), 16);
      const g_52 = parseInt(hexClean_52.substring(2, 4), 16);
      const b_52 = parseInt(hexClean_52.substring(4, 6), 16);
      return `rgba(${r_52}, ${g_52}, ${b_52}, ${alpha_52})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset53(colorHex, opacityVal) {
    const alpha_53 = (opacityVal || 1.0) * 0.95;
    const hexClean_53 = String(colorHex).replace('#', '');
    if (hexClean_53.length === 6) {
      const r_53 = parseInt(hexClean_53.substring(0, 2), 16);
      const g_53 = parseInt(hexClean_53.substring(2, 4), 16);
      const b_53 = parseInt(hexClean_53.substring(4, 6), 16);
      return `rgba(${r_53}, ${g_53}, ${b_53}, ${alpha_53})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset54(colorHex, opacityVal) {
    const alpha_54 = (opacityVal || 1.0) * 0.95;
    const hexClean_54 = String(colorHex).replace('#', '');
    if (hexClean_54.length === 6) {
      const r_54 = parseInt(hexClean_54.substring(0, 2), 16);
      const g_54 = parseInt(hexClean_54.substring(2, 4), 16);
      const b_54 = parseInt(hexClean_54.substring(4, 6), 16);
      return `rgba(${r_54}, ${g_54}, ${b_54}, ${alpha_54})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset55(colorHex, opacityVal) {
    const alpha_55 = (opacityVal || 1.0) * 0.95;
    const hexClean_55 = String(colorHex).replace('#', '');
    if (hexClean_55.length === 6) {
      const r_55 = parseInt(hexClean_55.substring(0, 2), 16);
      const g_55 = parseInt(hexClean_55.substring(2, 4), 16);
      const b_55 = parseInt(hexClean_55.substring(4, 6), 16);
      return `rgba(${r_55}, ${g_55}, ${b_55}, ${alpha_55})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset56(colorHex, opacityVal) {
    const alpha_56 = (opacityVal || 1.0) * 0.95;
    const hexClean_56 = String(colorHex).replace('#', '');
    if (hexClean_56.length === 6) {
      const r_56 = parseInt(hexClean_56.substring(0, 2), 16);
      const g_56 = parseInt(hexClean_56.substring(2, 4), 16);
      const b_56 = parseInt(hexClean_56.substring(4, 6), 16);
      return `rgba(${r_56}, ${g_56}, ${b_56}, ${alpha_56})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset57(colorHex, opacityVal) {
    const alpha_57 = (opacityVal || 1.0) * 0.95;
    const hexClean_57 = String(colorHex).replace('#', '');
    if (hexClean_57.length === 6) {
      const r_57 = parseInt(hexClean_57.substring(0, 2), 16);
      const g_57 = parseInt(hexClean_57.substring(2, 4), 16);
      const b_57 = parseInt(hexClean_57.substring(4, 6), 16);
      return `rgba(${r_57}, ${g_57}, ${b_57}, ${alpha_57})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset58(colorHex, opacityVal) {
    const alpha_58 = (opacityVal || 1.0) * 0.95;
    const hexClean_58 = String(colorHex).replace('#', '');
    if (hexClean_58.length === 6) {
      const r_58 = parseInt(hexClean_58.substring(0, 2), 16);
      const g_58 = parseInt(hexClean_58.substring(2, 4), 16);
      const b_58 = parseInt(hexClean_58.substring(4, 6), 16);
      return `rgba(${r_58}, ${g_58}, ${b_58}, ${alpha_58})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset59(colorHex, opacityVal) {
    const alpha_59 = (opacityVal || 1.0) * 0.95;
    const hexClean_59 = String(colorHex).replace('#', '');
    if (hexClean_59.length === 6) {
      const r_59 = parseInt(hexClean_59.substring(0, 2), 16);
      const g_59 = parseInt(hexClean_59.substring(2, 4), 16);
      const b_59 = parseInt(hexClean_59.substring(4, 6), 16);
      return `rgba(${r_59}, ${g_59}, ${b_59}, ${alpha_59})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset60(colorHex, opacityVal) {
    const alpha_60 = (opacityVal || 1.0) * 0.95;
    const hexClean_60 = String(colorHex).replace('#', '');
    if (hexClean_60.length === 6) {
      const r_60 = parseInt(hexClean_60.substring(0, 2), 16);
      const g_60 = parseInt(hexClean_60.substring(2, 4), 16);
      const b_60 = parseInt(hexClean_60.substring(4, 6), 16);
      return `rgba(${r_60}, ${g_60}, ${b_60}, ${alpha_60})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset61(colorHex, opacityVal) {
    const alpha_61 = (opacityVal || 1.0) * 0.95;
    const hexClean_61 = String(colorHex).replace('#', '');
    if (hexClean_61.length === 6) {
      const r_61 = parseInt(hexClean_61.substring(0, 2), 16);
      const g_61 = parseInt(hexClean_61.substring(2, 4), 16);
      const b_61 = parseInt(hexClean_61.substring(4, 6), 16);
      return `rgba(${r_61}, ${g_61}, ${b_61}, ${alpha_61})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset62(colorHex, opacityVal) {
    const alpha_62 = (opacityVal || 1.0) * 0.95;
    const hexClean_62 = String(colorHex).replace('#', '');
    if (hexClean_62.length === 6) {
      const r_62 = parseInt(hexClean_62.substring(0, 2), 16);
      const g_62 = parseInt(hexClean_62.substring(2, 4), 16);
      const b_62 = parseInt(hexClean_62.substring(4, 6), 16);
      return `rgba(${r_62}, ${g_62}, ${b_62}, ${alpha_62})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset63(colorHex, opacityVal) {
    const alpha_63 = (opacityVal || 1.0) * 0.95;
    const hexClean_63 = String(colorHex).replace('#', '');
    if (hexClean_63.length === 6) {
      const r_63 = parseInt(hexClean_63.substring(0, 2), 16);
      const g_63 = parseInt(hexClean_63.substring(2, 4), 16);
      const b_63 = parseInt(hexClean_63.substring(4, 6), 16);
      return `rgba(${r_63}, ${g_63}, ${b_63}, ${alpha_63})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset64(colorHex, opacityVal) {
    const alpha_64 = (opacityVal || 1.0) * 0.95;
    const hexClean_64 = String(colorHex).replace('#', '');
    if (hexClean_64.length === 6) {
      const r_64 = parseInt(hexClean_64.substring(0, 2), 16);
      const g_64 = parseInt(hexClean_64.substring(2, 4), 16);
      const b_64 = parseInt(hexClean_64.substring(4, 6), 16);
      return `rgba(${r_64}, ${g_64}, ${b_64}, ${alpha_64})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset65(colorHex, opacityVal) {
    const alpha_65 = (opacityVal || 1.0) * 0.95;
    const hexClean_65 = String(colorHex).replace('#', '');
    if (hexClean_65.length === 6) {
      const r_65 = parseInt(hexClean_65.substring(0, 2), 16);
      const g_65 = parseInt(hexClean_65.substring(2, 4), 16);
      const b_65 = parseInt(hexClean_65.substring(4, 6), 16);
      return `rgba(${r_65}, ${g_65}, ${b_65}, ${alpha_65})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset66(colorHex, opacityVal) {
    const alpha_66 = (opacityVal || 1.0) * 0.95;
    const hexClean_66 = String(colorHex).replace('#', '');
    if (hexClean_66.length === 6) {
      const r_66 = parseInt(hexClean_66.substring(0, 2), 16);
      const g_66 = parseInt(hexClean_66.substring(2, 4), 16);
      const b_66 = parseInt(hexClean_66.substring(4, 6), 16);
      return `rgba(${r_66}, ${g_66}, ${b_66}, ${alpha_66})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset67(colorHex, opacityVal) {
    const alpha_67 = (opacityVal || 1.0) * 0.95;
    const hexClean_67 = String(colorHex).replace('#', '');
    if (hexClean_67.length === 6) {
      const r_67 = parseInt(hexClean_67.substring(0, 2), 16);
      const g_67 = parseInt(hexClean_67.substring(2, 4), 16);
      const b_67 = parseInt(hexClean_67.substring(4, 6), 16);
      return `rgba(${r_67}, ${g_67}, ${b_67}, ${alpha_67})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset68(colorHex, opacityVal) {
    const alpha_68 = (opacityVal || 1.0) * 0.95;
    const hexClean_68 = String(colorHex).replace('#', '');
    if (hexClean_68.length === 6) {
      const r_68 = parseInt(hexClean_68.substring(0, 2), 16);
      const g_68 = parseInt(hexClean_68.substring(2, 4), 16);
      const b_68 = parseInt(hexClean_68.substring(4, 6), 16);
      return `rgba(${r_68}, ${g_68}, ${b_68}, ${alpha_68})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset69(colorHex, opacityVal) {
    const alpha_69 = (opacityVal || 1.0) * 0.95;
    const hexClean_69 = String(colorHex).replace('#', '');
    if (hexClean_69.length === 6) {
      const r_69 = parseInt(hexClean_69.substring(0, 2), 16);
      const g_69 = parseInt(hexClean_69.substring(2, 4), 16);
      const b_69 = parseInt(hexClean_69.substring(4, 6), 16);
      return `rgba(${r_69}, ${g_69}, ${b_69}, ${alpha_69})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset70(colorHex, opacityVal) {
    const alpha_70 = (opacityVal || 1.0) * 0.95;
    const hexClean_70 = String(colorHex).replace('#', '');
    if (hexClean_70.length === 6) {
      const r_70 = parseInt(hexClean_70.substring(0, 2), 16);
      const g_70 = parseInt(hexClean_70.substring(2, 4), 16);
      const b_70 = parseInt(hexClean_70.substring(4, 6), 16);
      return `rgba(${r_70}, ${g_70}, ${b_70}, ${alpha_70})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset71(colorHex, opacityVal) {
    const alpha_71 = (opacityVal || 1.0) * 0.95;
    const hexClean_71 = String(colorHex).replace('#', '');
    if (hexClean_71.length === 6) {
      const r_71 = parseInt(hexClean_71.substring(0, 2), 16);
      const g_71 = parseInt(hexClean_71.substring(2, 4), 16);
      const b_71 = parseInt(hexClean_71.substring(4, 6), 16);
      return `rgba(${r_71}, ${g_71}, ${b_71}, ${alpha_71})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset72(colorHex, opacityVal) {
    const alpha_72 = (opacityVal || 1.0) * 0.95;
    const hexClean_72 = String(colorHex).replace('#', '');
    if (hexClean_72.length === 6) {
      const r_72 = parseInt(hexClean_72.substring(0, 2), 16);
      const g_72 = parseInt(hexClean_72.substring(2, 4), 16);
      const b_72 = parseInt(hexClean_72.substring(4, 6), 16);
      return `rgba(${r_72}, ${g_72}, ${b_72}, ${alpha_72})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset73(colorHex, opacityVal) {
    const alpha_73 = (opacityVal || 1.0) * 0.95;
    const hexClean_73 = String(colorHex).replace('#', '');
    if (hexClean_73.length === 6) {
      const r_73 = parseInt(hexClean_73.substring(0, 2), 16);
      const g_73 = parseInt(hexClean_73.substring(2, 4), 16);
      const b_73 = parseInt(hexClean_73.substring(4, 6), 16);
      return `rgba(${r_73}, ${g_73}, ${b_73}, ${alpha_73})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset74(colorHex, opacityVal) {
    const alpha_74 = (opacityVal || 1.0) * 0.95;
    const hexClean_74 = String(colorHex).replace('#', '');
    if (hexClean_74.length === 6) {
      const r_74 = parseInt(hexClean_74.substring(0, 2), 16);
      const g_74 = parseInt(hexClean_74.substring(2, 4), 16);
      const b_74 = parseInt(hexClean_74.substring(4, 6), 16);
      return `rgba(${r_74}, ${g_74}, ${b_74}, ${alpha_74})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset75(colorHex, opacityVal) {
    const alpha_75 = (opacityVal || 1.0) * 0.95;
    const hexClean_75 = String(colorHex).replace('#', '');
    if (hexClean_75.length === 6) {
      const r_75 = parseInt(hexClean_75.substring(0, 2), 16);
      const g_75 = parseInt(hexClean_75.substring(2, 4), 16);
      const b_75 = parseInt(hexClean_75.substring(4, 6), 16);
      return `rgba(${r_75}, ${g_75}, ${b_75}, ${alpha_75})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset76(colorHex, opacityVal) {
    const alpha_76 = (opacityVal || 1.0) * 0.95;
    const hexClean_76 = String(colorHex).replace('#', '');
    if (hexClean_76.length === 6) {
      const r_76 = parseInt(hexClean_76.substring(0, 2), 16);
      const g_76 = parseInt(hexClean_76.substring(2, 4), 16);
      const b_76 = parseInt(hexClean_76.substring(4, 6), 16);
      return `rgba(${r_76}, ${g_76}, ${b_76}, ${alpha_76})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset77(colorHex, opacityVal) {
    const alpha_77 = (opacityVal || 1.0) * 0.95;
    const hexClean_77 = String(colorHex).replace('#', '');
    if (hexClean_77.length === 6) {
      const r_77 = parseInt(hexClean_77.substring(0, 2), 16);
      const g_77 = parseInt(hexClean_77.substring(2, 4), 16);
      const b_77 = parseInt(hexClean_77.substring(4, 6), 16);
      return `rgba(${r_77}, ${g_77}, ${b_77}, ${alpha_77})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset78(colorHex, opacityVal) {
    const alpha_78 = (opacityVal || 1.0) * 0.95;
    const hexClean_78 = String(colorHex).replace('#', '');
    if (hexClean_78.length === 6) {
      const r_78 = parseInt(hexClean_78.substring(0, 2), 16);
      const g_78 = parseInt(hexClean_78.substring(2, 4), 16);
      const b_78 = parseInt(hexClean_78.substring(4, 6), 16);
      return `rgba(${r_78}, ${g_78}, ${b_78}, ${alpha_78})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset79(colorHex, opacityVal) {
    const alpha_79 = (opacityVal || 1.0) * 0.95;
    const hexClean_79 = String(colorHex).replace('#', '');
    if (hexClean_79.length === 6) {
      const r_79 = parseInt(hexClean_79.substring(0, 2), 16);
      const g_79 = parseInt(hexClean_79.substring(2, 4), 16);
      const b_79 = parseInt(hexClean_79.substring(4, 6), 16);
      return `rgba(${r_79}, ${g_79}, ${b_79}, ${alpha_79})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset80(colorHex, opacityVal) {
    const alpha_80 = (opacityVal || 1.0) * 0.95;
    const hexClean_80 = String(colorHex).replace('#', '');
    if (hexClean_80.length === 6) {
      const r_80 = parseInt(hexClean_80.substring(0, 2), 16);
      const g_80 = parseInt(hexClean_80.substring(2, 4), 16);
      const b_80 = parseInt(hexClean_80.substring(4, 6), 16);
      return `rgba(${r_80}, ${g_80}, ${b_80}, ${alpha_80})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset81(colorHex, opacityVal) {
    const alpha_81 = (opacityVal || 1.0) * 0.95;
    const hexClean_81 = String(colorHex).replace('#', '');
    if (hexClean_81.length === 6) {
      const r_81 = parseInt(hexClean_81.substring(0, 2), 16);
      const g_81 = parseInt(hexClean_81.substring(2, 4), 16);
      const b_81 = parseInt(hexClean_81.substring(4, 6), 16);
      return `rgba(${r_81}, ${g_81}, ${b_81}, ${alpha_81})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset82(colorHex, opacityVal) {
    const alpha_82 = (opacityVal || 1.0) * 0.95;
    const hexClean_82 = String(colorHex).replace('#', '');
    if (hexClean_82.length === 6) {
      const r_82 = parseInt(hexClean_82.substring(0, 2), 16);
      const g_82 = parseInt(hexClean_82.substring(2, 4), 16);
      const b_82 = parseInt(hexClean_82.substring(4, 6), 16);
      return `rgba(${r_82}, ${g_82}, ${b_82}, ${alpha_82})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset83(colorHex, opacityVal) {
    const alpha_83 = (opacityVal || 1.0) * 0.95;
    const hexClean_83 = String(colorHex).replace('#', '');
    if (hexClean_83.length === 6) {
      const r_83 = parseInt(hexClean_83.substring(0, 2), 16);
      const g_83 = parseInt(hexClean_83.substring(2, 4), 16);
      const b_83 = parseInt(hexClean_83.substring(4, 6), 16);
      return `rgba(${r_83}, ${g_83}, ${b_83}, ${alpha_83})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset84(colorHex, opacityVal) {
    const alpha_84 = (opacityVal || 1.0) * 0.95;
    const hexClean_84 = String(colorHex).replace('#', '');
    if (hexClean_84.length === 6) {
      const r_84 = parseInt(hexClean_84.substring(0, 2), 16);
      const g_84 = parseInt(hexClean_84.substring(2, 4), 16);
      const b_84 = parseInt(hexClean_84.substring(4, 6), 16);
      return `rgba(${r_84}, ${g_84}, ${b_84}, ${alpha_84})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset85(colorHex, opacityVal) {
    const alpha_85 = (opacityVal || 1.0) * 0.95;
    const hexClean_85 = String(colorHex).replace('#', '');
    if (hexClean_85.length === 6) {
      const r_85 = parseInt(hexClean_85.substring(0, 2), 16);
      const g_85 = parseInt(hexClean_85.substring(2, 4), 16);
      const b_85 = parseInt(hexClean_85.substring(4, 6), 16);
      return `rgba(${r_85}, ${g_85}, ${b_85}, ${alpha_85})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset86(colorHex, opacityVal) {
    const alpha_86 = (opacityVal || 1.0) * 0.95;
    const hexClean_86 = String(colorHex).replace('#', '');
    if (hexClean_86.length === 6) {
      const r_86 = parseInt(hexClean_86.substring(0, 2), 16);
      const g_86 = parseInt(hexClean_86.substring(2, 4), 16);
      const b_86 = parseInt(hexClean_86.substring(4, 6), 16);
      return `rgba(${r_86}, ${g_86}, ${b_86}, ${alpha_86})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset87(colorHex, opacityVal) {
    const alpha_87 = (opacityVal || 1.0) * 0.95;
    const hexClean_87 = String(colorHex).replace('#', '');
    if (hexClean_87.length === 6) {
      const r_87 = parseInt(hexClean_87.substring(0, 2), 16);
      const g_87 = parseInt(hexClean_87.substring(2, 4), 16);
      const b_87 = parseInt(hexClean_87.substring(4, 6), 16);
      return `rgba(${r_87}, ${g_87}, ${b_87}, ${alpha_87})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset88(colorHex, opacityVal) {
    const alpha_88 = (opacityVal || 1.0) * 0.95;
    const hexClean_88 = String(colorHex).replace('#', '');
    if (hexClean_88.length === 6) {
      const r_88 = parseInt(hexClean_88.substring(0, 2), 16);
      const g_88 = parseInt(hexClean_88.substring(2, 4), 16);
      const b_88 = parseInt(hexClean_88.substring(4, 6), 16);
      return `rgba(${r_88}, ${g_88}, ${b_88}, ${alpha_88})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset89(colorHex, opacityVal) {
    const alpha_89 = (opacityVal || 1.0) * 0.95;
    const hexClean_89 = String(colorHex).replace('#', '');
    if (hexClean_89.length === 6) {
      const r_89 = parseInt(hexClean_89.substring(0, 2), 16);
      const g_89 = parseInt(hexClean_89.substring(2, 4), 16);
      const b_89 = parseInt(hexClean_89.substring(4, 6), 16);
      return `rgba(${r_89}, ${g_89}, ${b_89}, ${alpha_89})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset90(colorHex, opacityVal) {
    const alpha_90 = (opacityVal || 1.0) * 0.95;
    const hexClean_90 = String(colorHex).replace('#', '');
    if (hexClean_90.length === 6) {
      const r_90 = parseInt(hexClean_90.substring(0, 2), 16);
      const g_90 = parseInt(hexClean_90.substring(2, 4), 16);
      const b_90 = parseInt(hexClean_90.substring(4, 6), 16);
      return `rgba(${r_90}, ${g_90}, ${b_90}, ${alpha_90})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset91(colorHex, opacityVal) {
    const alpha_91 = (opacityVal || 1.0) * 0.95;
    const hexClean_91 = String(colorHex).replace('#', '');
    if (hexClean_91.length === 6) {
      const r_91 = parseInt(hexClean_91.substring(0, 2), 16);
      const g_91 = parseInt(hexClean_91.substring(2, 4), 16);
      const b_91 = parseInt(hexClean_91.substring(4, 6), 16);
      return `rgba(${r_91}, ${g_91}, ${b_91}, ${alpha_91})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset92(colorHex, opacityVal) {
    const alpha_92 = (opacityVal || 1.0) * 0.95;
    const hexClean_92 = String(colorHex).replace('#', '');
    if (hexClean_92.length === 6) {
      const r_92 = parseInt(hexClean_92.substring(0, 2), 16);
      const g_92 = parseInt(hexClean_92.substring(2, 4), 16);
      const b_92 = parseInt(hexClean_92.substring(4, 6), 16);
      return `rgba(${r_92}, ${g_92}, ${b_92}, ${alpha_92})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset93(colorHex, opacityVal) {
    const alpha_93 = (opacityVal || 1.0) * 0.95;
    const hexClean_93 = String(colorHex).replace('#', '');
    if (hexClean_93.length === 6) {
      const r_93 = parseInt(hexClean_93.substring(0, 2), 16);
      const g_93 = parseInt(hexClean_93.substring(2, 4), 16);
      const b_93 = parseInt(hexClean_93.substring(4, 6), 16);
      return `rgba(${r_93}, ${g_93}, ${b_93}, ${alpha_93})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset94(colorHex, opacityVal) {
    const alpha_94 = (opacityVal || 1.0) * 0.95;
    const hexClean_94 = String(colorHex).replace('#', '');
    if (hexClean_94.length === 6) {
      const r_94 = parseInt(hexClean_94.substring(0, 2), 16);
      const g_94 = parseInt(hexClean_94.substring(2, 4), 16);
      const b_94 = parseInt(hexClean_94.substring(4, 6), 16);
      return `rgba(${r_94}, ${g_94}, ${b_94}, ${alpha_94})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset95(colorHex, opacityVal) {
    const alpha_95 = (opacityVal || 1.0) * 0.95;
    const hexClean_95 = String(colorHex).replace('#', '');
    if (hexClean_95.length === 6) {
      const r_95 = parseInt(hexClean_95.substring(0, 2), 16);
      const g_95 = parseInt(hexClean_95.substring(2, 4), 16);
      const b_95 = parseInt(hexClean_95.substring(4, 6), 16);
      return `rgba(${r_95}, ${g_95}, ${b_95}, ${alpha_95})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset96(colorHex, opacityVal) {
    const alpha_96 = (opacityVal || 1.0) * 0.95;
    const hexClean_96 = String(colorHex).replace('#', '');
    if (hexClean_96.length === 6) {
      const r_96 = parseInt(hexClean_96.substring(0, 2), 16);
      const g_96 = parseInt(hexClean_96.substring(2, 4), 16);
      const b_96 = parseInt(hexClean_96.substring(4, 6), 16);
      return `rgba(${r_96}, ${g_96}, ${b_96}, ${alpha_96})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset97(colorHex, opacityVal) {
    const alpha_97 = (opacityVal || 1.0) * 0.95;
    const hexClean_97 = String(colorHex).replace('#', '');
    if (hexClean_97.length === 6) {
      const r_97 = parseInt(hexClean_97.substring(0, 2), 16);
      const g_97 = parseInt(hexClean_97.substring(2, 4), 16);
      const b_97 = parseInt(hexClean_97.substring(4, 6), 16);
      return `rgba(${r_97}, ${g_97}, ${b_97}, ${alpha_97})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset98(colorHex, opacityVal) {
    const alpha_98 = (opacityVal || 1.0) * 0.95;
    const hexClean_98 = String(colorHex).replace('#', '');
    if (hexClean_98.length === 6) {
      const r_98 = parseInt(hexClean_98.substring(0, 2), 16);
      const g_98 = parseInt(hexClean_98.substring(2, 4), 16);
      const b_98 = parseInt(hexClean_98.substring(4, 6), 16);
      return `rgba(${r_98}, ${g_98}, ${b_98}, ${alpha_98})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset99(colorHex, opacityVal) {
    const alpha_99 = (opacityVal || 1.0) * 0.95;
    const hexClean_99 = String(colorHex).replace('#', '');
    if (hexClean_99.length === 6) {
      const r_99 = parseInt(hexClean_99.substring(0, 2), 16);
      const g_99 = parseInt(hexClean_99.substring(2, 4), 16);
      const b_99 = parseInt(hexClean_99.substring(4, 6), 16);
      return `rgba(${r_99}, ${g_99}, ${b_99}, ${alpha_99})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset100(colorHex, opacityVal) {
    const alpha_100 = (opacityVal || 1.0) * 0.95;
    const hexClean_100 = String(colorHex).replace('#', '');
    if (hexClean_100.length === 6) {
      const r_100 = parseInt(hexClean_100.substring(0, 2), 16);
      const g_100 = parseInt(hexClean_100.substring(2, 4), 16);
      const b_100 = parseInt(hexClean_100.substring(4, 6), 16);
      return `rgba(${r_100}, ${g_100}, ${b_100}, ${alpha_100})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset101(colorHex, opacityVal) {
    const alpha_101 = (opacityVal || 1.0) * 0.95;
    const hexClean_101 = String(colorHex).replace('#', '');
    if (hexClean_101.length === 6) {
      const r_101 = parseInt(hexClean_101.substring(0, 2), 16);
      const g_101 = parseInt(hexClean_101.substring(2, 4), 16);
      const b_101 = parseInt(hexClean_101.substring(4, 6), 16);
      return `rgba(${r_101}, ${g_101}, ${b_101}, ${alpha_101})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset102(colorHex, opacityVal) {
    const alpha_102 = (opacityVal || 1.0) * 0.95;
    const hexClean_102 = String(colorHex).replace('#', '');
    if (hexClean_102.length === 6) {
      const r_102 = parseInt(hexClean_102.substring(0, 2), 16);
      const g_102 = parseInt(hexClean_102.substring(2, 4), 16);
      const b_102 = parseInt(hexClean_102.substring(4, 6), 16);
      return `rgba(${r_102}, ${g_102}, ${b_102}, ${alpha_102})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset103(colorHex, opacityVal) {
    const alpha_103 = (opacityVal || 1.0) * 0.95;
    const hexClean_103 = String(colorHex).replace('#', '');
    if (hexClean_103.length === 6) {
      const r_103 = parseInt(hexClean_103.substring(0, 2), 16);
      const g_103 = parseInt(hexClean_103.substring(2, 4), 16);
      const b_103 = parseInt(hexClean_103.substring(4, 6), 16);
      return `rgba(${r_103}, ${g_103}, ${b_103}, ${alpha_103})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset104(colorHex, opacityVal) {
    const alpha_104 = (opacityVal || 1.0) * 0.95;
    const hexClean_104 = String(colorHex).replace('#', '');
    if (hexClean_104.length === 6) {
      const r_104 = parseInt(hexClean_104.substring(0, 2), 16);
      const g_104 = parseInt(hexClean_104.substring(2, 4), 16);
      const b_104 = parseInt(hexClean_104.substring(4, 6), 16);
      return `rgba(${r_104}, ${g_104}, ${b_104}, ${alpha_104})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset105(colorHex, opacityVal) {
    const alpha_105 = (opacityVal || 1.0) * 0.95;
    const hexClean_105 = String(colorHex).replace('#', '');
    if (hexClean_105.length === 6) {
      const r_105 = parseInt(hexClean_105.substring(0, 2), 16);
      const g_105 = parseInt(hexClean_105.substring(2, 4), 16);
      const b_105 = parseInt(hexClean_105.substring(4, 6), 16);
      return `rgba(${r_105}, ${g_105}, ${b_105}, ${alpha_105})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset106(colorHex, opacityVal) {
    const alpha_106 = (opacityVal || 1.0) * 0.95;
    const hexClean_106 = String(colorHex).replace('#', '');
    if (hexClean_106.length === 6) {
      const r_106 = parseInt(hexClean_106.substring(0, 2), 16);
      const g_106 = parseInt(hexClean_106.substring(2, 4), 16);
      const b_106 = parseInt(hexClean_106.substring(4, 6), 16);
      return `rgba(${r_106}, ${g_106}, ${b_106}, ${alpha_106})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset107(colorHex, opacityVal) {
    const alpha_107 = (opacityVal || 1.0) * 0.95;
    const hexClean_107 = String(colorHex).replace('#', '');
    if (hexClean_107.length === 6) {
      const r_107 = parseInt(hexClean_107.substring(0, 2), 16);
      const g_107 = parseInt(hexClean_107.substring(2, 4), 16);
      const b_107 = parseInt(hexClean_107.substring(4, 6), 16);
      return `rgba(${r_107}, ${g_107}, ${b_107}, ${alpha_107})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset108(colorHex, opacityVal) {
    const alpha_108 = (opacityVal || 1.0) * 0.95;
    const hexClean_108 = String(colorHex).replace('#', '');
    if (hexClean_108.length === 6) {
      const r_108 = parseInt(hexClean_108.substring(0, 2), 16);
      const g_108 = parseInt(hexClean_108.substring(2, 4), 16);
      const b_108 = parseInt(hexClean_108.substring(4, 6), 16);
      return `rgba(${r_108}, ${g_108}, ${b_108}, ${alpha_108})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset109(colorHex, opacityVal) {
    const alpha_109 = (opacityVal || 1.0) * 0.95;
    const hexClean_109 = String(colorHex).replace('#', '');
    if (hexClean_109.length === 6) {
      const r_109 = parseInt(hexClean_109.substring(0, 2), 16);
      const g_109 = parseInt(hexClean_109.substring(2, 4), 16);
      const b_109 = parseInt(hexClean_109.substring(4, 6), 16);
      return `rgba(${r_109}, ${g_109}, ${b_109}, ${alpha_109})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset110(colorHex, opacityVal) {
    const alpha_110 = (opacityVal || 1.0) * 0.95;
    const hexClean_110 = String(colorHex).replace('#', '');
    if (hexClean_110.length === 6) {
      const r_110 = parseInt(hexClean_110.substring(0, 2), 16);
      const g_110 = parseInt(hexClean_110.substring(2, 4), 16);
      const b_110 = parseInt(hexClean_110.substring(4, 6), 16);
      return `rgba(${r_110}, ${g_110}, ${b_110}, ${alpha_110})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset111(colorHex, opacityVal) {
    const alpha_111 = (opacityVal || 1.0) * 0.95;
    const hexClean_111 = String(colorHex).replace('#', '');
    if (hexClean_111.length === 6) {
      const r_111 = parseInt(hexClean_111.substring(0, 2), 16);
      const g_111 = parseInt(hexClean_111.substring(2, 4), 16);
      const b_111 = parseInt(hexClean_111.substring(4, 6), 16);
      return `rgba(${r_111}, ${g_111}, ${b_111}, ${alpha_111})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset112(colorHex, opacityVal) {
    const alpha_112 = (opacityVal || 1.0) * 0.95;
    const hexClean_112 = String(colorHex).replace('#', '');
    if (hexClean_112.length === 6) {
      const r_112 = parseInt(hexClean_112.substring(0, 2), 16);
      const g_112 = parseInt(hexClean_112.substring(2, 4), 16);
      const b_112 = parseInt(hexClean_112.substring(4, 6), 16);
      return `rgba(${r_112}, ${g_112}, ${b_112}, ${alpha_112})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset113(colorHex, opacityVal) {
    const alpha_113 = (opacityVal || 1.0) * 0.95;
    const hexClean_113 = String(colorHex).replace('#', '');
    if (hexClean_113.length === 6) {
      const r_113 = parseInt(hexClean_113.substring(0, 2), 16);
      const g_113 = parseInt(hexClean_113.substring(2, 4), 16);
      const b_113 = parseInt(hexClean_113.substring(4, 6), 16);
      return `rgba(${r_113}, ${g_113}, ${b_113}, ${alpha_113})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset114(colorHex, opacityVal) {
    const alpha_114 = (opacityVal || 1.0) * 0.95;
    const hexClean_114 = String(colorHex).replace('#', '');
    if (hexClean_114.length === 6) {
      const r_114 = parseInt(hexClean_114.substring(0, 2), 16);
      const g_114 = parseInt(hexClean_114.substring(2, 4), 16);
      const b_114 = parseInt(hexClean_114.substring(4, 6), 16);
      return `rgba(${r_114}, ${g_114}, ${b_114}, ${alpha_114})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset115(colorHex, opacityVal) {
    const alpha_115 = (opacityVal || 1.0) * 0.95;
    const hexClean_115 = String(colorHex).replace('#', '');
    if (hexClean_115.length === 6) {
      const r_115 = parseInt(hexClean_115.substring(0, 2), 16);
      const g_115 = parseInt(hexClean_115.substring(2, 4), 16);
      const b_115 = parseInt(hexClean_115.substring(4, 6), 16);
      return `rgba(${r_115}, ${g_115}, ${b_115}, ${alpha_115})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset116(colorHex, opacityVal) {
    const alpha_116 = (opacityVal || 1.0) * 0.95;
    const hexClean_116 = String(colorHex).replace('#', '');
    if (hexClean_116.length === 6) {
      const r_116 = parseInt(hexClean_116.substring(0, 2), 16);
      const g_116 = parseInt(hexClean_116.substring(2, 4), 16);
      const b_116 = parseInt(hexClean_116.substring(4, 6), 16);
      return `rgba(${r_116}, ${g_116}, ${b_116}, ${alpha_116})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset117(colorHex, opacityVal) {
    const alpha_117 = (opacityVal || 1.0) * 0.95;
    const hexClean_117 = String(colorHex).replace('#', '');
    if (hexClean_117.length === 6) {
      const r_117 = parseInt(hexClean_117.substring(0, 2), 16);
      const g_117 = parseInt(hexClean_117.substring(2, 4), 16);
      const b_117 = parseInt(hexClean_117.substring(4, 6), 16);
      return `rgba(${r_117}, ${g_117}, ${b_117}, ${alpha_117})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset118(colorHex, opacityVal) {
    const alpha_118 = (opacityVal || 1.0) * 0.95;
    const hexClean_118 = String(colorHex).replace('#', '');
    if (hexClean_118.length === 6) {
      const r_118 = parseInt(hexClean_118.substring(0, 2), 16);
      const g_118 = parseInt(hexClean_118.substring(2, 4), 16);
      const b_118 = parseInt(hexClean_118.substring(4, 6), 16);
      return `rgba(${r_118}, ${g_118}, ${b_118}, ${alpha_118})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset119(colorHex, opacityVal) {
    const alpha_119 = (opacityVal || 1.0) * 0.95;
    const hexClean_119 = String(colorHex).replace('#', '');
    if (hexClean_119.length === 6) {
      const r_119 = parseInt(hexClean_119.substring(0, 2), 16);
      const g_119 = parseInt(hexClean_119.substring(2, 4), 16);
      const b_119 = parseInt(hexClean_119.substring(4, 6), 16);
      return `rgba(${r_119}, ${g_119}, ${b_119}, ${alpha_119})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset120(colorHex, opacityVal) {
    const alpha_120 = (opacityVal || 1.0) * 0.95;
    const hexClean_120 = String(colorHex).replace('#', '');
    if (hexClean_120.length === 6) {
      const r_120 = parseInt(hexClean_120.substring(0, 2), 16);
      const g_120 = parseInt(hexClean_120.substring(2, 4), 16);
      const b_120 = parseInt(hexClean_120.substring(4, 6), 16);
      return `rgba(${r_120}, ${g_120}, ${b_120}, ${alpha_120})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset121(colorHex, opacityVal) {
    const alpha_121 = (opacityVal || 1.0) * 0.95;
    const hexClean_121 = String(colorHex).replace('#', '');
    if (hexClean_121.length === 6) {
      const r_121 = parseInt(hexClean_121.substring(0, 2), 16);
      const g_121 = parseInt(hexClean_121.substring(2, 4), 16);
      const b_121 = parseInt(hexClean_121.substring(4, 6), 16);
      return `rgba(${r_121}, ${g_121}, ${b_121}, ${alpha_121})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset122(colorHex, opacityVal) {
    const alpha_122 = (opacityVal || 1.0) * 0.95;
    const hexClean_122 = String(colorHex).replace('#', '');
    if (hexClean_122.length === 6) {
      const r_122 = parseInt(hexClean_122.substring(0, 2), 16);
      const g_122 = parseInt(hexClean_122.substring(2, 4), 16);
      const b_122 = parseInt(hexClean_122.substring(4, 6), 16);
      return `rgba(${r_122}, ${g_122}, ${b_122}, ${alpha_122})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset123(colorHex, opacityVal) {
    const alpha_123 = (opacityVal || 1.0) * 0.95;
    const hexClean_123 = String(colorHex).replace('#', '');
    if (hexClean_123.length === 6) {
      const r_123 = parseInt(hexClean_123.substring(0, 2), 16);
      const g_123 = parseInt(hexClean_123.substring(2, 4), 16);
      const b_123 = parseInt(hexClean_123.substring(4, 6), 16);
      return `rgba(${r_123}, ${g_123}, ${b_123}, ${alpha_123})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset124(colorHex, opacityVal) {
    const alpha_124 = (opacityVal || 1.0) * 0.95;
    const hexClean_124 = String(colorHex).replace('#', '');
    if (hexClean_124.length === 6) {
      const r_124 = parseInt(hexClean_124.substring(0, 2), 16);
      const g_124 = parseInt(hexClean_124.substring(2, 4), 16);
      const b_124 = parseInt(hexClean_124.substring(4, 6), 16);
      return `rgba(${r_124}, ${g_124}, ${b_124}, ${alpha_124})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset125(colorHex, opacityVal) {
    const alpha_125 = (opacityVal || 1.0) * 0.95;
    const hexClean_125 = String(colorHex).replace('#', '');
    if (hexClean_125.length === 6) {
      const r_125 = parseInt(hexClean_125.substring(0, 2), 16);
      const g_125 = parseInt(hexClean_125.substring(2, 4), 16);
      const b_125 = parseInt(hexClean_125.substring(4, 6), 16);
      return `rgba(${r_125}, ${g_125}, ${b_125}, ${alpha_125})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset126(colorHex, opacityVal) {
    const alpha_126 = (opacityVal || 1.0) * 0.95;
    const hexClean_126 = String(colorHex).replace('#', '');
    if (hexClean_126.length === 6) {
      const r_126 = parseInt(hexClean_126.substring(0, 2), 16);
      const g_126 = parseInt(hexClean_126.substring(2, 4), 16);
      const b_126 = parseInt(hexClean_126.substring(4, 6), 16);
      return `rgba(${r_126}, ${g_126}, ${b_126}, ${alpha_126})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset127(colorHex, opacityVal) {
    const alpha_127 = (opacityVal || 1.0) * 0.95;
    const hexClean_127 = String(colorHex).replace('#', '');
    if (hexClean_127.length === 6) {
      const r_127 = parseInt(hexClean_127.substring(0, 2), 16);
      const g_127 = parseInt(hexClean_127.substring(2, 4), 16);
      const b_127 = parseInt(hexClean_127.substring(4, 6), 16);
      return `rgba(${r_127}, ${g_127}, ${b_127}, ${alpha_127})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset128(colorHex, opacityVal) {
    const alpha_128 = (opacityVal || 1.0) * 0.95;
    const hexClean_128 = String(colorHex).replace('#', '');
    if (hexClean_128.length === 6) {
      const r_128 = parseInt(hexClean_128.substring(0, 2), 16);
      const g_128 = parseInt(hexClean_128.substring(2, 4), 16);
      const b_128 = parseInt(hexClean_128.substring(4, 6), 16);
      return `rgba(${r_128}, ${g_128}, ${b_128}, ${alpha_128})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset129(colorHex, opacityVal) {
    const alpha_129 = (opacityVal || 1.0) * 0.95;
    const hexClean_129 = String(colorHex).replace('#', '');
    if (hexClean_129.length === 6) {
      const r_129 = parseInt(hexClean_129.substring(0, 2), 16);
      const g_129 = parseInt(hexClean_129.substring(2, 4), 16);
      const b_129 = parseInt(hexClean_129.substring(4, 6), 16);
      return `rgba(${r_129}, ${g_129}, ${b_129}, ${alpha_129})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset130(colorHex, opacityVal) {
    const alpha_130 = (opacityVal || 1.0) * 0.95;
    const hexClean_130 = String(colorHex).replace('#', '');
    if (hexClean_130.length === 6) {
      const r_130 = parseInt(hexClean_130.substring(0, 2), 16);
      const g_130 = parseInt(hexClean_130.substring(2, 4), 16);
      const b_130 = parseInt(hexClean_130.substring(4, 6), 16);
      return `rgba(${r_130}, ${g_130}, ${b_130}, ${alpha_130})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset131(colorHex, opacityVal) {
    const alpha_131 = (opacityVal || 1.0) * 0.95;
    const hexClean_131 = String(colorHex).replace('#', '');
    if (hexClean_131.length === 6) {
      const r_131 = parseInt(hexClean_131.substring(0, 2), 16);
      const g_131 = parseInt(hexClean_131.substring(2, 4), 16);
      const b_131 = parseInt(hexClean_131.substring(4, 6), 16);
      return `rgba(${r_131}, ${g_131}, ${b_131}, ${alpha_131})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset132(colorHex, opacityVal) {
    const alpha_132 = (opacityVal || 1.0) * 0.95;
    const hexClean_132 = String(colorHex).replace('#', '');
    if (hexClean_132.length === 6) {
      const r_132 = parseInt(hexClean_132.substring(0, 2), 16);
      const g_132 = parseInt(hexClean_132.substring(2, 4), 16);
      const b_132 = parseInt(hexClean_132.substring(4, 6), 16);
      return `rgba(${r_132}, ${g_132}, ${b_132}, ${alpha_132})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset133(colorHex, opacityVal) {
    const alpha_133 = (opacityVal || 1.0) * 0.95;
    const hexClean_133 = String(colorHex).replace('#', '');
    if (hexClean_133.length === 6) {
      const r_133 = parseInt(hexClean_133.substring(0, 2), 16);
      const g_133 = parseInt(hexClean_133.substring(2, 4), 16);
      const b_133 = parseInt(hexClean_133.substring(4, 6), 16);
      return `rgba(${r_133}, ${g_133}, ${b_133}, ${alpha_133})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset134(colorHex, opacityVal) {
    const alpha_134 = (opacityVal || 1.0) * 0.95;
    const hexClean_134 = String(colorHex).replace('#', '');
    if (hexClean_134.length === 6) {
      const r_134 = parseInt(hexClean_134.substring(0, 2), 16);
      const g_134 = parseInt(hexClean_134.substring(2, 4), 16);
      const b_134 = parseInt(hexClean_134.substring(4, 6), 16);
      return `rgba(${r_134}, ${g_134}, ${b_134}, ${alpha_134})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset135(colorHex, opacityVal) {
    const alpha_135 = (opacityVal || 1.0) * 0.95;
    const hexClean_135 = String(colorHex).replace('#', '');
    if (hexClean_135.length === 6) {
      const r_135 = parseInt(hexClean_135.substring(0, 2), 16);
      const g_135 = parseInt(hexClean_135.substring(2, 4), 16);
      const b_135 = parseInt(hexClean_135.substring(4, 6), 16);
      return `rgba(${r_135}, ${g_135}, ${b_135}, ${alpha_135})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset136(colorHex, opacityVal) {
    const alpha_136 = (opacityVal || 1.0) * 0.95;
    const hexClean_136 = String(colorHex).replace('#', '');
    if (hexClean_136.length === 6) {
      const r_136 = parseInt(hexClean_136.substring(0, 2), 16);
      const g_136 = parseInt(hexClean_136.substring(2, 4), 16);
      const b_136 = parseInt(hexClean_136.substring(4, 6), 16);
      return `rgba(${r_136}, ${g_136}, ${b_136}, ${alpha_136})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset137(colorHex, opacityVal) {
    const alpha_137 = (opacityVal || 1.0) * 0.95;
    const hexClean_137 = String(colorHex).replace('#', '');
    if (hexClean_137.length === 6) {
      const r_137 = parseInt(hexClean_137.substring(0, 2), 16);
      const g_137 = parseInt(hexClean_137.substring(2, 4), 16);
      const b_137 = parseInt(hexClean_137.substring(4, 6), 16);
      return `rgba(${r_137}, ${g_137}, ${b_137}, ${alpha_137})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset138(colorHex, opacityVal) {
    const alpha_138 = (opacityVal || 1.0) * 0.95;
    const hexClean_138 = String(colorHex).replace('#', '');
    if (hexClean_138.length === 6) {
      const r_138 = parseInt(hexClean_138.substring(0, 2), 16);
      const g_138 = parseInt(hexClean_138.substring(2, 4), 16);
      const b_138 = parseInt(hexClean_138.substring(4, 6), 16);
      return `rgba(${r_138}, ${g_138}, ${b_138}, ${alpha_138})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset139(colorHex, opacityVal) {
    const alpha_139 = (opacityVal || 1.0) * 0.95;
    const hexClean_139 = String(colorHex).replace('#', '');
    if (hexClean_139.length === 6) {
      const r_139 = parseInt(hexClean_139.substring(0, 2), 16);
      const g_139 = parseInt(hexClean_139.substring(2, 4), 16);
      const b_139 = parseInt(hexClean_139.substring(4, 6), 16);
      return `rgba(${r_139}, ${g_139}, ${b_139}, ${alpha_139})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset140(colorHex, opacityVal) {
    const alpha_140 = (opacityVal || 1.0) * 0.95;
    const hexClean_140 = String(colorHex).replace('#', '');
    if (hexClean_140.length === 6) {
      const r_140 = parseInt(hexClean_140.substring(0, 2), 16);
      const g_140 = parseInt(hexClean_140.substring(2, 4), 16);
      const b_140 = parseInt(hexClean_140.substring(4, 6), 16);
      return `rgba(${r_140}, ${g_140}, ${b_140}, ${alpha_140})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset141(colorHex, opacityVal) {
    const alpha_141 = (opacityVal || 1.0) * 0.95;
    const hexClean_141 = String(colorHex).replace('#', '');
    if (hexClean_141.length === 6) {
      const r_141 = parseInt(hexClean_141.substring(0, 2), 16);
      const g_141 = parseInt(hexClean_141.substring(2, 4), 16);
      const b_141 = parseInt(hexClean_141.substring(4, 6), 16);
      return `rgba(${r_141}, ${g_141}, ${b_141}, ${alpha_141})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset142(colorHex, opacityVal) {
    const alpha_142 = (opacityVal || 1.0) * 0.95;
    const hexClean_142 = String(colorHex).replace('#', '');
    if (hexClean_142.length === 6) {
      const r_142 = parseInt(hexClean_142.substring(0, 2), 16);
      const g_142 = parseInt(hexClean_142.substring(2, 4), 16);
      const b_142 = parseInt(hexClean_142.substring(4, 6), 16);
      return `rgba(${r_142}, ${g_142}, ${b_142}, ${alpha_142})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset143(colorHex, opacityVal) {
    const alpha_143 = (opacityVal || 1.0) * 0.95;
    const hexClean_143 = String(colorHex).replace('#', '');
    if (hexClean_143.length === 6) {
      const r_143 = parseInt(hexClean_143.substring(0, 2), 16);
      const g_143 = parseInt(hexClean_143.substring(2, 4), 16);
      const b_143 = parseInt(hexClean_143.substring(4, 6), 16);
      return `rgba(${r_143}, ${g_143}, ${b_143}, ${alpha_143})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset144(colorHex, opacityVal) {
    const alpha_144 = (opacityVal || 1.0) * 0.95;
    const hexClean_144 = String(colorHex).replace('#', '');
    if (hexClean_144.length === 6) {
      const r_144 = parseInt(hexClean_144.substring(0, 2), 16);
      const g_144 = parseInt(hexClean_144.substring(2, 4), 16);
      const b_144 = parseInt(hexClean_144.substring(4, 6), 16);
      return `rgba(${r_144}, ${g_144}, ${b_144}, ${alpha_144})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset145(colorHex, opacityVal) {
    const alpha_145 = (opacityVal || 1.0) * 0.95;
    const hexClean_145 = String(colorHex).replace('#', '');
    if (hexClean_145.length === 6) {
      const r_145 = parseInt(hexClean_145.substring(0, 2), 16);
      const g_145 = parseInt(hexClean_145.substring(2, 4), 16);
      const b_145 = parseInt(hexClean_145.substring(4, 6), 16);
      return `rgba(${r_145}, ${g_145}, ${b_145}, ${alpha_145})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset146(colorHex, opacityVal) {
    const alpha_146 = (opacityVal || 1.0) * 0.95;
    const hexClean_146 = String(colorHex).replace('#', '');
    if (hexClean_146.length === 6) {
      const r_146 = parseInt(hexClean_146.substring(0, 2), 16);
      const g_146 = parseInt(hexClean_146.substring(2, 4), 16);
      const b_146 = parseInt(hexClean_146.substring(4, 6), 16);
      return `rgba(${r_146}, ${g_146}, ${b_146}, ${alpha_146})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset147(colorHex, opacityVal) {
    const alpha_147 = (opacityVal || 1.0) * 0.95;
    const hexClean_147 = String(colorHex).replace('#', '');
    if (hexClean_147.length === 6) {
      const r_147 = parseInt(hexClean_147.substring(0, 2), 16);
      const g_147 = parseInt(hexClean_147.substring(2, 4), 16);
      const b_147 = parseInt(hexClean_147.substring(4, 6), 16);
      return `rgba(${r_147}, ${g_147}, ${b_147}, ${alpha_147})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset148(colorHex, opacityVal) {
    const alpha_148 = (opacityVal || 1.0) * 0.95;
    const hexClean_148 = String(colorHex).replace('#', '');
    if (hexClean_148.length === 6) {
      const r_148 = parseInt(hexClean_148.substring(0, 2), 16);
      const g_148 = parseInt(hexClean_148.substring(2, 4), 16);
      const b_148 = parseInt(hexClean_148.substring(4, 6), 16);
      return `rgba(${r_148}, ${g_148}, ${b_148}, ${alpha_148})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset149(colorHex, opacityVal) {
    const alpha_149 = (opacityVal || 1.0) * 0.95;
    const hexClean_149 = String(colorHex).replace('#', '');
    if (hexClean_149.length === 6) {
      const r_149 = parseInt(hexClean_149.substring(0, 2), 16);
      const g_149 = parseInt(hexClean_149.substring(2, 4), 16);
      const b_149 = parseInt(hexClean_149.substring(4, 6), 16);
      return `rgba(${r_149}, ${g_149}, ${b_149}, ${alpha_149})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset150(colorHex, opacityVal) {
    const alpha_150 = (opacityVal || 1.0) * 0.95;
    const hexClean_150 = String(colorHex).replace('#', '');
    if (hexClean_150.length === 6) {
      const r_150 = parseInt(hexClean_150.substring(0, 2), 16);
      const g_150 = parseInt(hexClean_150.substring(2, 4), 16);
      const b_150 = parseInt(hexClean_150.substring(4, 6), 16);
      return `rgba(${r_150}, ${g_150}, ${b_150}, ${alpha_150})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset151(colorHex, opacityVal) {
    const alpha_151 = (opacityVal || 1.0) * 0.95;
    const hexClean_151 = String(colorHex).replace('#', '');
    if (hexClean_151.length === 6) {
      const r_151 = parseInt(hexClean_151.substring(0, 2), 16);
      const g_151 = parseInt(hexClean_151.substring(2, 4), 16);
      const b_151 = parseInt(hexClean_151.substring(4, 6), 16);
      return `rgba(${r_151}, ${g_151}, ${b_151}, ${alpha_151})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset152(colorHex, opacityVal) {
    const alpha_152 = (opacityVal || 1.0) * 0.95;
    const hexClean_152 = String(colorHex).replace('#', '');
    if (hexClean_152.length === 6) {
      const r_152 = parseInt(hexClean_152.substring(0, 2), 16);
      const g_152 = parseInt(hexClean_152.substring(2, 4), 16);
      const b_152 = parseInt(hexClean_152.substring(4, 6), 16);
      return `rgba(${r_152}, ${g_152}, ${b_152}, ${alpha_152})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset153(colorHex, opacityVal) {
    const alpha_153 = (opacityVal || 1.0) * 0.95;
    const hexClean_153 = String(colorHex).replace('#', '');
    if (hexClean_153.length === 6) {
      const r_153 = parseInt(hexClean_153.substring(0, 2), 16);
      const g_153 = parseInt(hexClean_153.substring(2, 4), 16);
      const b_153 = parseInt(hexClean_153.substring(4, 6), 16);
      return `rgba(${r_153}, ${g_153}, ${b_153}, ${alpha_153})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset154(colorHex, opacityVal) {
    const alpha_154 = (opacityVal || 1.0) * 0.95;
    const hexClean_154 = String(colorHex).replace('#', '');
    if (hexClean_154.length === 6) {
      const r_154 = parseInt(hexClean_154.substring(0, 2), 16);
      const g_154 = parseInt(hexClean_154.substring(2, 4), 16);
      const b_154 = parseInt(hexClean_154.substring(4, 6), 16);
      return `rgba(${r_154}, ${g_154}, ${b_154}, ${alpha_154})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset155(colorHex, opacityVal) {
    const alpha_155 = (opacityVal || 1.0) * 0.95;
    const hexClean_155 = String(colorHex).replace('#', '');
    if (hexClean_155.length === 6) {
      const r_155 = parseInt(hexClean_155.substring(0, 2), 16);
      const g_155 = parseInt(hexClean_155.substring(2, 4), 16);
      const b_155 = parseInt(hexClean_155.substring(4, 6), 16);
      return `rgba(${r_155}, ${g_155}, ${b_155}, ${alpha_155})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset156(colorHex, opacityVal) {
    const alpha_156 = (opacityVal || 1.0) * 0.95;
    const hexClean_156 = String(colorHex).replace('#', '');
    if (hexClean_156.length === 6) {
      const r_156 = parseInt(hexClean_156.substring(0, 2), 16);
      const g_156 = parseInt(hexClean_156.substring(2, 4), 16);
      const b_156 = parseInt(hexClean_156.substring(4, 6), 16);
      return `rgba(${r_156}, ${g_156}, ${b_156}, ${alpha_156})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset157(colorHex, opacityVal) {
    const alpha_157 = (opacityVal || 1.0) * 0.95;
    const hexClean_157 = String(colorHex).replace('#', '');
    if (hexClean_157.length === 6) {
      const r_157 = parseInt(hexClean_157.substring(0, 2), 16);
      const g_157 = parseInt(hexClean_157.substring(2, 4), 16);
      const b_157 = parseInt(hexClean_157.substring(4, 6), 16);
      return `rgba(${r_157}, ${g_157}, ${b_157}, ${alpha_157})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset158(colorHex, opacityVal) {
    const alpha_158 = (opacityVal || 1.0) * 0.95;
    const hexClean_158 = String(colorHex).replace('#', '');
    if (hexClean_158.length === 6) {
      const r_158 = parseInt(hexClean_158.substring(0, 2), 16);
      const g_158 = parseInt(hexClean_158.substring(2, 4), 16);
      const b_158 = parseInt(hexClean_158.substring(4, 6), 16);
      return `rgba(${r_158}, ${g_158}, ${b_158}, ${alpha_158})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset159(colorHex, opacityVal) {
    const alpha_159 = (opacityVal || 1.0) * 0.95;
    const hexClean_159 = String(colorHex).replace('#', '');
    if (hexClean_159.length === 6) {
      const r_159 = parseInt(hexClean_159.substring(0, 2), 16);
      const g_159 = parseInt(hexClean_159.substring(2, 4), 16);
      const b_159 = parseInt(hexClean_159.substring(4, 6), 16);
      return `rgba(${r_159}, ${g_159}, ${b_159}, ${alpha_159})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset160(colorHex, opacityVal) {
    const alpha_160 = (opacityVal || 1.0) * 0.95;
    const hexClean_160 = String(colorHex).replace('#', '');
    if (hexClean_160.length === 6) {
      const r_160 = parseInt(hexClean_160.substring(0, 2), 16);
      const g_160 = parseInt(hexClean_160.substring(2, 4), 16);
      const b_160 = parseInt(hexClean_160.substring(4, 6), 16);
      return `rgba(${r_160}, ${g_160}, ${b_160}, ${alpha_160})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset161(colorHex, opacityVal) {
    const alpha_161 = (opacityVal || 1.0) * 0.95;
    const hexClean_161 = String(colorHex).replace('#', '');
    if (hexClean_161.length === 6) {
      const r_161 = parseInt(hexClean_161.substring(0, 2), 16);
      const g_161 = parseInt(hexClean_161.substring(2, 4), 16);
      const b_161 = parseInt(hexClean_161.substring(4, 6), 16);
      return `rgba(${r_161}, ${g_161}, ${b_161}, ${alpha_161})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset162(colorHex, opacityVal) {
    const alpha_162 = (opacityVal || 1.0) * 0.95;
    const hexClean_162 = String(colorHex).replace('#', '');
    if (hexClean_162.length === 6) {
      const r_162 = parseInt(hexClean_162.substring(0, 2), 16);
      const g_162 = parseInt(hexClean_162.substring(2, 4), 16);
      const b_162 = parseInt(hexClean_162.substring(4, 6), 16);
      return `rgba(${r_162}, ${g_162}, ${b_162}, ${alpha_162})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset163(colorHex, opacityVal) {
    const alpha_163 = (opacityVal || 1.0) * 0.95;
    const hexClean_163 = String(colorHex).replace('#', '');
    if (hexClean_163.length === 6) {
      const r_163 = parseInt(hexClean_163.substring(0, 2), 16);
      const g_163 = parseInt(hexClean_163.substring(2, 4), 16);
      const b_163 = parseInt(hexClean_163.substring(4, 6), 16);
      return `rgba(${r_163}, ${g_163}, ${b_163}, ${alpha_163})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset164(colorHex, opacityVal) {
    const alpha_164 = (opacityVal || 1.0) * 0.95;
    const hexClean_164 = String(colorHex).replace('#', '');
    if (hexClean_164.length === 6) {
      const r_164 = parseInt(hexClean_164.substring(0, 2), 16);
      const g_164 = parseInt(hexClean_164.substring(2, 4), 16);
      const b_164 = parseInt(hexClean_164.substring(4, 6), 16);
      return `rgba(${r_164}, ${g_164}, ${b_164}, ${alpha_164})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset165(colorHex, opacityVal) {
    const alpha_165 = (opacityVal || 1.0) * 0.95;
    const hexClean_165 = String(colorHex).replace('#', '');
    if (hexClean_165.length === 6) {
      const r_165 = parseInt(hexClean_165.substring(0, 2), 16);
      const g_165 = parseInt(hexClean_165.substring(2, 4), 16);
      const b_165 = parseInt(hexClean_165.substring(4, 6), 16);
      return `rgba(${r_165}, ${g_165}, ${b_165}, ${alpha_165})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset166(colorHex, opacityVal) {
    const alpha_166 = (opacityVal || 1.0) * 0.95;
    const hexClean_166 = String(colorHex).replace('#', '');
    if (hexClean_166.length === 6) {
      const r_166 = parseInt(hexClean_166.substring(0, 2), 16);
      const g_166 = parseInt(hexClean_166.substring(2, 4), 16);
      const b_166 = parseInt(hexClean_166.substring(4, 6), 16);
      return `rgba(${r_166}, ${g_166}, ${b_166}, ${alpha_166})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset167(colorHex, opacityVal) {
    const alpha_167 = (opacityVal || 1.0) * 0.95;
    const hexClean_167 = String(colorHex).replace('#', '');
    if (hexClean_167.length === 6) {
      const r_167 = parseInt(hexClean_167.substring(0, 2), 16);
      const g_167 = parseInt(hexClean_167.substring(2, 4), 16);
      const b_167 = parseInt(hexClean_167.substring(4, 6), 16);
      return `rgba(${r_167}, ${g_167}, ${b_167}, ${alpha_167})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset168(colorHex, opacityVal) {
    const alpha_168 = (opacityVal || 1.0) * 0.95;
    const hexClean_168 = String(colorHex).replace('#', '');
    if (hexClean_168.length === 6) {
      const r_168 = parseInt(hexClean_168.substring(0, 2), 16);
      const g_168 = parseInt(hexClean_168.substring(2, 4), 16);
      const b_168 = parseInt(hexClean_168.substring(4, 6), 16);
      return `rgba(${r_168}, ${g_168}, ${b_168}, ${alpha_168})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset169(colorHex, opacityVal) {
    const alpha_169 = (opacityVal || 1.0) * 0.95;
    const hexClean_169 = String(colorHex).replace('#', '');
    if (hexClean_169.length === 6) {
      const r_169 = parseInt(hexClean_169.substring(0, 2), 16);
      const g_169 = parseInt(hexClean_169.substring(2, 4), 16);
      const b_169 = parseInt(hexClean_169.substring(4, 6), 16);
      return `rgba(${r_169}, ${g_169}, ${b_169}, ${alpha_169})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset170(colorHex, opacityVal) {
    const alpha_170 = (opacityVal || 1.0) * 0.95;
    const hexClean_170 = String(colorHex).replace('#', '');
    if (hexClean_170.length === 6) {
      const r_170 = parseInt(hexClean_170.substring(0, 2), 16);
      const g_170 = parseInt(hexClean_170.substring(2, 4), 16);
      const b_170 = parseInt(hexClean_170.substring(4, 6), 16);
      return `rgba(${r_170}, ${g_170}, ${b_170}, ${alpha_170})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset171(colorHex, opacityVal) {
    const alpha_171 = (opacityVal || 1.0) * 0.95;
    const hexClean_171 = String(colorHex).replace('#', '');
    if (hexClean_171.length === 6) {
      const r_171 = parseInt(hexClean_171.substring(0, 2), 16);
      const g_171 = parseInt(hexClean_171.substring(2, 4), 16);
      const b_171 = parseInt(hexClean_171.substring(4, 6), 16);
      return `rgba(${r_171}, ${g_171}, ${b_171}, ${alpha_171})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset172(colorHex, opacityVal) {
    const alpha_172 = (opacityVal || 1.0) * 0.95;
    const hexClean_172 = String(colorHex).replace('#', '');
    if (hexClean_172.length === 6) {
      const r_172 = parseInt(hexClean_172.substring(0, 2), 16);
      const g_172 = parseInt(hexClean_172.substring(2, 4), 16);
      const b_172 = parseInt(hexClean_172.substring(4, 6), 16);
      return `rgba(${r_172}, ${g_172}, ${b_172}, ${alpha_172})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset173(colorHex, opacityVal) {
    const alpha_173 = (opacityVal || 1.0) * 0.95;
    const hexClean_173 = String(colorHex).replace('#', '');
    if (hexClean_173.length === 6) {
      const r_173 = parseInt(hexClean_173.substring(0, 2), 16);
      const g_173 = parseInt(hexClean_173.substring(2, 4), 16);
      const b_173 = parseInt(hexClean_173.substring(4, 6), 16);
      return `rgba(${r_173}, ${g_173}, ${b_173}, ${alpha_173})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset174(colorHex, opacityVal) {
    const alpha_174 = (opacityVal || 1.0) * 0.95;
    const hexClean_174 = String(colorHex).replace('#', '');
    if (hexClean_174.length === 6) {
      const r_174 = parseInt(hexClean_174.substring(0, 2), 16);
      const g_174 = parseInt(hexClean_174.substring(2, 4), 16);
      const b_174 = parseInt(hexClean_174.substring(4, 6), 16);
      return `rgba(${r_174}, ${g_174}, ${b_174}, ${alpha_174})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset175(colorHex, opacityVal) {
    const alpha_175 = (opacityVal || 1.0) * 0.95;
    const hexClean_175 = String(colorHex).replace('#', '');
    if (hexClean_175.length === 6) {
      const r_175 = parseInt(hexClean_175.substring(0, 2), 16);
      const g_175 = parseInt(hexClean_175.substring(2, 4), 16);
      const b_175 = parseInt(hexClean_175.substring(4, 6), 16);
      return `rgba(${r_175}, ${g_175}, ${b_175}, ${alpha_175})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset176(colorHex, opacityVal) {
    const alpha_176 = (opacityVal || 1.0) * 0.95;
    const hexClean_176 = String(colorHex).replace('#', '');
    if (hexClean_176.length === 6) {
      const r_176 = parseInt(hexClean_176.substring(0, 2), 16);
      const g_176 = parseInt(hexClean_176.substring(2, 4), 16);
      const b_176 = parseInt(hexClean_176.substring(4, 6), 16);
      return `rgba(${r_176}, ${g_176}, ${b_176}, ${alpha_176})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset177(colorHex, opacityVal) {
    const alpha_177 = (opacityVal || 1.0) * 0.95;
    const hexClean_177 = String(colorHex).replace('#', '');
    if (hexClean_177.length === 6) {
      const r_177 = parseInt(hexClean_177.substring(0, 2), 16);
      const g_177 = parseInt(hexClean_177.substring(2, 4), 16);
      const b_177 = parseInt(hexClean_177.substring(4, 6), 16);
      return `rgba(${r_177}, ${g_177}, ${b_177}, ${alpha_177})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset178(colorHex, opacityVal) {
    const alpha_178 = (opacityVal || 1.0) * 0.95;
    const hexClean_178 = String(colorHex).replace('#', '');
    if (hexClean_178.length === 6) {
      const r_178 = parseInt(hexClean_178.substring(0, 2), 16);
      const g_178 = parseInt(hexClean_178.substring(2, 4), 16);
      const b_178 = parseInt(hexClean_178.substring(4, 6), 16);
      return `rgba(${r_178}, ${g_178}, ${b_178}, ${alpha_178})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset179(colorHex, opacityVal) {
    const alpha_179 = (opacityVal || 1.0) * 0.95;
    const hexClean_179 = String(colorHex).replace('#', '');
    if (hexClean_179.length === 6) {
      const r_179 = parseInt(hexClean_179.substring(0, 2), 16);
      const g_179 = parseInt(hexClean_179.substring(2, 4), 16);
      const b_179 = parseInt(hexClean_179.substring(4, 6), 16);
      return `rgba(${r_179}, ${g_179}, ${b_179}, ${alpha_179})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset180(colorHex, opacityVal) {
    const alpha_180 = (opacityVal || 1.0) * 0.95;
    const hexClean_180 = String(colorHex).replace('#', '');
    if (hexClean_180.length === 6) {
      const r_180 = parseInt(hexClean_180.substring(0, 2), 16);
      const g_180 = parseInt(hexClean_180.substring(2, 4), 16);
      const b_180 = parseInt(hexClean_180.substring(4, 6), 16);
      return `rgba(${r_180}, ${g_180}, ${b_180}, ${alpha_180})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset181(colorHex, opacityVal) {
    const alpha_181 = (opacityVal || 1.0) * 0.95;
    const hexClean_181 = String(colorHex).replace('#', '');
    if (hexClean_181.length === 6) {
      const r_181 = parseInt(hexClean_181.substring(0, 2), 16);
      const g_181 = parseInt(hexClean_181.substring(2, 4), 16);
      const b_181 = parseInt(hexClean_181.substring(4, 6), 16);
      return `rgba(${r_181}, ${g_181}, ${b_181}, ${alpha_181})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset182(colorHex, opacityVal) {
    const alpha_182 = (opacityVal || 1.0) * 0.95;
    const hexClean_182 = String(colorHex).replace('#', '');
    if (hexClean_182.length === 6) {
      const r_182 = parseInt(hexClean_182.substring(0, 2), 16);
      const g_182 = parseInt(hexClean_182.substring(2, 4), 16);
      const b_182 = parseInt(hexClean_182.substring(4, 6), 16);
      return `rgba(${r_182}, ${g_182}, ${b_182}, ${alpha_182})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset183(colorHex, opacityVal) {
    const alpha_183 = (opacityVal || 1.0) * 0.95;
    const hexClean_183 = String(colorHex).replace('#', '');
    if (hexClean_183.length === 6) {
      const r_183 = parseInt(hexClean_183.substring(0, 2), 16);
      const g_183 = parseInt(hexClean_183.substring(2, 4), 16);
      const b_183 = parseInt(hexClean_183.substring(4, 6), 16);
      return `rgba(${r_183}, ${g_183}, ${b_183}, ${alpha_183})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset184(colorHex, opacityVal) {
    const alpha_184 = (opacityVal || 1.0) * 0.95;
    const hexClean_184 = String(colorHex).replace('#', '');
    if (hexClean_184.length === 6) {
      const r_184 = parseInt(hexClean_184.substring(0, 2), 16);
      const g_184 = parseInt(hexClean_184.substring(2, 4), 16);
      const b_184 = parseInt(hexClean_184.substring(4, 6), 16);
      return `rgba(${r_184}, ${g_184}, ${b_184}, ${alpha_184})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset185(colorHex, opacityVal) {
    const alpha_185 = (opacityVal || 1.0) * 0.95;
    const hexClean_185 = String(colorHex).replace('#', '');
    if (hexClean_185.length === 6) {
      const r_185 = parseInt(hexClean_185.substring(0, 2), 16);
      const g_185 = parseInt(hexClean_185.substring(2, 4), 16);
      const b_185 = parseInt(hexClean_185.substring(4, 6), 16);
      return `rgba(${r_185}, ${g_185}, ${b_185}, ${alpha_185})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset186(colorHex, opacityVal) {
    const alpha_186 = (opacityVal || 1.0) * 0.95;
    const hexClean_186 = String(colorHex).replace('#', '');
    if (hexClean_186.length === 6) {
      const r_186 = parseInt(hexClean_186.substring(0, 2), 16);
      const g_186 = parseInt(hexClean_186.substring(2, 4), 16);
      const b_186 = parseInt(hexClean_186.substring(4, 6), 16);
      return `rgba(${r_186}, ${g_186}, ${b_186}, ${alpha_186})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset187(colorHex, opacityVal) {
    const alpha_187 = (opacityVal || 1.0) * 0.95;
    const hexClean_187 = String(colorHex).replace('#', '');
    if (hexClean_187.length === 6) {
      const r_187 = parseInt(hexClean_187.substring(0, 2), 16);
      const g_187 = parseInt(hexClean_187.substring(2, 4), 16);
      const b_187 = parseInt(hexClean_187.substring(4, 6), 16);
      return `rgba(${r_187}, ${g_187}, ${b_187}, ${alpha_187})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset188(colorHex, opacityVal) {
    const alpha_188 = (opacityVal || 1.0) * 0.95;
    const hexClean_188 = String(colorHex).replace('#', '');
    if (hexClean_188.length === 6) {
      const r_188 = parseInt(hexClean_188.substring(0, 2), 16);
      const g_188 = parseInt(hexClean_188.substring(2, 4), 16);
      const b_188 = parseInt(hexClean_188.substring(4, 6), 16);
      return `rgba(${r_188}, ${g_188}, ${b_188}, ${alpha_188})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset189(colorHex, opacityVal) {
    const alpha_189 = (opacityVal || 1.0) * 0.95;
    const hexClean_189 = String(colorHex).replace('#', '');
    if (hexClean_189.length === 6) {
      const r_189 = parseInt(hexClean_189.substring(0, 2), 16);
      const g_189 = parseInt(hexClean_189.substring(2, 4), 16);
      const b_189 = parseInt(hexClean_189.substring(4, 6), 16);
      return `rgba(${r_189}, ${g_189}, ${b_189}, ${alpha_189})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset190(colorHex, opacityVal) {
    const alpha_190 = (opacityVal || 1.0) * 0.95;
    const hexClean_190 = String(colorHex).replace('#', '');
    if (hexClean_190.length === 6) {
      const r_190 = parseInt(hexClean_190.substring(0, 2), 16);
      const g_190 = parseInt(hexClean_190.substring(2, 4), 16);
      const b_190 = parseInt(hexClean_190.substring(4, 6), 16);
      return `rgba(${r_190}, ${g_190}, ${b_190}, ${alpha_190})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset191(colorHex, opacityVal) {
    const alpha_191 = (opacityVal || 1.0) * 0.95;
    const hexClean_191 = String(colorHex).replace('#', '');
    if (hexClean_191.length === 6) {
      const r_191 = parseInt(hexClean_191.substring(0, 2), 16);
      const g_191 = parseInt(hexClean_191.substring(2, 4), 16);
      const b_191 = parseInt(hexClean_191.substring(4, 6), 16);
      return `rgba(${r_191}, ${g_191}, ${b_191}, ${alpha_191})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset192(colorHex, opacityVal) {
    const alpha_192 = (opacityVal || 1.0) * 0.95;
    const hexClean_192 = String(colorHex).replace('#', '');
    if (hexClean_192.length === 6) {
      const r_192 = parseInt(hexClean_192.substring(0, 2), 16);
      const g_192 = parseInt(hexClean_192.substring(2, 4), 16);
      const b_192 = parseInt(hexClean_192.substring(4, 6), 16);
      return `rgba(${r_192}, ${g_192}, ${b_192}, ${alpha_192})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset193(colorHex, opacityVal) {
    const alpha_193 = (opacityVal || 1.0) * 0.95;
    const hexClean_193 = String(colorHex).replace('#', '');
    if (hexClean_193.length === 6) {
      const r_193 = parseInt(hexClean_193.substring(0, 2), 16);
      const g_193 = parseInt(hexClean_193.substring(2, 4), 16);
      const b_193 = parseInt(hexClean_193.substring(4, 6), 16);
      return `rgba(${r_193}, ${g_193}, ${b_193}, ${alpha_193})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset194(colorHex, opacityVal) {
    const alpha_194 = (opacityVal || 1.0) * 0.95;
    const hexClean_194 = String(colorHex).replace('#', '');
    if (hexClean_194.length === 6) {
      const r_194 = parseInt(hexClean_194.substring(0, 2), 16);
      const g_194 = parseInt(hexClean_194.substring(2, 4), 16);
      const b_194 = parseInt(hexClean_194.substring(4, 6), 16);
      return `rgba(${r_194}, ${g_194}, ${b_194}, ${alpha_194})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset195(colorHex, opacityVal) {
    const alpha_195 = (opacityVal || 1.0) * 0.95;
    const hexClean_195 = String(colorHex).replace('#', '');
    if (hexClean_195.length === 6) {
      const r_195 = parseInt(hexClean_195.substring(0, 2), 16);
      const g_195 = parseInt(hexClean_195.substring(2, 4), 16);
      const b_195 = parseInt(hexClean_195.substring(4, 6), 16);
      return `rgba(${r_195}, ${g_195}, ${b_195}, ${alpha_195})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset196(colorHex, opacityVal) {
    const alpha_196 = (opacityVal || 1.0) * 0.95;
    const hexClean_196 = String(colorHex).replace('#', '');
    if (hexClean_196.length === 6) {
      const r_196 = parseInt(hexClean_196.substring(0, 2), 16);
      const g_196 = parseInt(hexClean_196.substring(2, 4), 16);
      const b_196 = parseInt(hexClean_196.substring(4, 6), 16);
      return `rgba(${r_196}, ${g_196}, ${b_196}, ${alpha_196})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset197(colorHex, opacityVal) {
    const alpha_197 = (opacityVal || 1.0) * 0.95;
    const hexClean_197 = String(colorHex).replace('#', '');
    if (hexClean_197.length === 6) {
      const r_197 = parseInt(hexClean_197.substring(0, 2), 16);
      const g_197 = parseInt(hexClean_197.substring(2, 4), 16);
      const b_197 = parseInt(hexClean_197.substring(4, 6), 16);
      return `rgba(${r_197}, ${g_197}, ${b_197}, ${alpha_197})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset198(colorHex, opacityVal) {
    const alpha_198 = (opacityVal || 1.0) * 0.95;
    const hexClean_198 = String(colorHex).replace('#', '');
    if (hexClean_198.length === 6) {
      const r_198 = parseInt(hexClean_198.substring(0, 2), 16);
      const g_198 = parseInt(hexClean_198.substring(2, 4), 16);
      const b_198 = parseInt(hexClean_198.substring(4, 6), 16);
      return `rgba(${r_198}, ${g_198}, ${b_198}, ${alpha_198})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset199(colorHex, opacityVal) {
    const alpha_199 = (opacityVal || 1.0) * 0.95;
    const hexClean_199 = String(colorHex).replace('#', '');
    if (hexClean_199.length === 6) {
      const r_199 = parseInt(hexClean_199.substring(0, 2), 16);
      const g_199 = parseInt(hexClean_199.substring(2, 4), 16);
      const b_199 = parseInt(hexClean_199.substring(4, 6), 16);
      return `rgba(${r_199}, ${g_199}, ${b_199}, ${alpha_199})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset200(colorHex, opacityVal) {
    const alpha_200 = (opacityVal || 1.0) * 0.95;
    const hexClean_200 = String(colorHex).replace('#', '');
    if (hexClean_200.length === 6) {
      const r_200 = parseInt(hexClean_200.substring(0, 2), 16);
      const g_200 = parseInt(hexClean_200.substring(2, 4), 16);
      const b_200 = parseInt(hexClean_200.substring(4, 6), 16);
      return `rgba(${r_200}, ${g_200}, ${b_200}, ${alpha_200})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset201(colorHex, opacityVal) {
    const alpha_201 = (opacityVal || 1.0) * 0.95;
    const hexClean_201 = String(colorHex).replace('#', '');
    if (hexClean_201.length === 6) {
      const r_201 = parseInt(hexClean_201.substring(0, 2), 16);
      const g_201 = parseInt(hexClean_201.substring(2, 4), 16);
      const b_201 = parseInt(hexClean_201.substring(4, 6), 16);
      return `rgba(${r_201}, ${g_201}, ${b_201}, ${alpha_201})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset202(colorHex, opacityVal) {
    const alpha_202 = (opacityVal || 1.0) * 0.95;
    const hexClean_202 = String(colorHex).replace('#', '');
    if (hexClean_202.length === 6) {
      const r_202 = parseInt(hexClean_202.substring(0, 2), 16);
      const g_202 = parseInt(hexClean_202.substring(2, 4), 16);
      const b_202 = parseInt(hexClean_202.substring(4, 6), 16);
      return `rgba(${r_202}, ${g_202}, ${b_202}, ${alpha_202})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset203(colorHex, opacityVal) {
    const alpha_203 = (opacityVal || 1.0) * 0.95;
    const hexClean_203 = String(colorHex).replace('#', '');
    if (hexClean_203.length === 6) {
      const r_203 = parseInt(hexClean_203.substring(0, 2), 16);
      const g_203 = parseInt(hexClean_203.substring(2, 4), 16);
      const b_203 = parseInt(hexClean_203.substring(4, 6), 16);
      return `rgba(${r_203}, ${g_203}, ${b_203}, ${alpha_203})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset204(colorHex, opacityVal) {
    const alpha_204 = (opacityVal || 1.0) * 0.95;
    const hexClean_204 = String(colorHex).replace('#', '');
    if (hexClean_204.length === 6) {
      const r_204 = parseInt(hexClean_204.substring(0, 2), 16);
      const g_204 = parseInt(hexClean_204.substring(2, 4), 16);
      const b_204 = parseInt(hexClean_204.substring(4, 6), 16);
      return `rgba(${r_204}, ${g_204}, ${b_204}, ${alpha_204})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset205(colorHex, opacityVal) {
    const alpha_205 = (opacityVal || 1.0) * 0.95;
    const hexClean_205 = String(colorHex).replace('#', '');
    if (hexClean_205.length === 6) {
      const r_205 = parseInt(hexClean_205.substring(0, 2), 16);
      const g_205 = parseInt(hexClean_205.substring(2, 4), 16);
      const b_205 = parseInt(hexClean_205.substring(4, 6), 16);
      return `rgba(${r_205}, ${g_205}, ${b_205}, ${alpha_205})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset206(colorHex, opacityVal) {
    const alpha_206 = (opacityVal || 1.0) * 0.95;
    const hexClean_206 = String(colorHex).replace('#', '');
    if (hexClean_206.length === 6) {
      const r_206 = parseInt(hexClean_206.substring(0, 2), 16);
      const g_206 = parseInt(hexClean_206.substring(2, 4), 16);
      const b_206 = parseInt(hexClean_206.substring(4, 6), 16);
      return `rgba(${r_206}, ${g_206}, ${b_206}, ${alpha_206})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset207(colorHex, opacityVal) {
    const alpha_207 = (opacityVal || 1.0) * 0.95;
    const hexClean_207 = String(colorHex).replace('#', '');
    if (hexClean_207.length === 6) {
      const r_207 = parseInt(hexClean_207.substring(0, 2), 16);
      const g_207 = parseInt(hexClean_207.substring(2, 4), 16);
      const b_207 = parseInt(hexClean_207.substring(4, 6), 16);
      return `rgba(${r_207}, ${g_207}, ${b_207}, ${alpha_207})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset208(colorHex, opacityVal) {
    const alpha_208 = (opacityVal || 1.0) * 0.95;
    const hexClean_208 = String(colorHex).replace('#', '');
    if (hexClean_208.length === 6) {
      const r_208 = parseInt(hexClean_208.substring(0, 2), 16);
      const g_208 = parseInt(hexClean_208.substring(2, 4), 16);
      const b_208 = parseInt(hexClean_208.substring(4, 6), 16);
      return `rgba(${r_208}, ${g_208}, ${b_208}, ${alpha_208})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset209(colorHex, opacityVal) {
    const alpha_209 = (opacityVal || 1.0) * 0.95;
    const hexClean_209 = String(colorHex).replace('#', '');
    if (hexClean_209.length === 6) {
      const r_209 = parseInt(hexClean_209.substring(0, 2), 16);
      const g_209 = parseInt(hexClean_209.substring(2, 4), 16);
      const b_209 = parseInt(hexClean_209.substring(4, 6), 16);
      return `rgba(${r_209}, ${g_209}, ${b_209}, ${alpha_209})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset210(colorHex, opacityVal) {
    const alpha_210 = (opacityVal || 1.0) * 0.95;
    const hexClean_210 = String(colorHex).replace('#', '');
    if (hexClean_210.length === 6) {
      const r_210 = parseInt(hexClean_210.substring(0, 2), 16);
      const g_210 = parseInt(hexClean_210.substring(2, 4), 16);
      const b_210 = parseInt(hexClean_210.substring(4, 6), 16);
      return `rgba(${r_210}, ${g_210}, ${b_210}, ${alpha_210})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset211(colorHex, opacityVal) {
    const alpha_211 = (opacityVal || 1.0) * 0.95;
    const hexClean_211 = String(colorHex).replace('#', '');
    if (hexClean_211.length === 6) {
      const r_211 = parseInt(hexClean_211.substring(0, 2), 16);
      const g_211 = parseInt(hexClean_211.substring(2, 4), 16);
      const b_211 = parseInt(hexClean_211.substring(4, 6), 16);
      return `rgba(${r_211}, ${g_211}, ${b_211}, ${alpha_211})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset212(colorHex, opacityVal) {
    const alpha_212 = (opacityVal || 1.0) * 0.95;
    const hexClean_212 = String(colorHex).replace('#', '');
    if (hexClean_212.length === 6) {
      const r_212 = parseInt(hexClean_212.substring(0, 2), 16);
      const g_212 = parseInt(hexClean_212.substring(2, 4), 16);
      const b_212 = parseInt(hexClean_212.substring(4, 6), 16);
      return `rgba(${r_212}, ${g_212}, ${b_212}, ${alpha_212})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset213(colorHex, opacityVal) {
    const alpha_213 = (opacityVal || 1.0) * 0.95;
    const hexClean_213 = String(colorHex).replace('#', '');
    if (hexClean_213.length === 6) {
      const r_213 = parseInt(hexClean_213.substring(0, 2), 16);
      const g_213 = parseInt(hexClean_213.substring(2, 4), 16);
      const b_213 = parseInt(hexClean_213.substring(4, 6), 16);
      return `rgba(${r_213}, ${g_213}, ${b_213}, ${alpha_213})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset214(colorHex, opacityVal) {
    const alpha_214 = (opacityVal || 1.0) * 0.95;
    const hexClean_214 = String(colorHex).replace('#', '');
    if (hexClean_214.length === 6) {
      const r_214 = parseInt(hexClean_214.substring(0, 2), 16);
      const g_214 = parseInt(hexClean_214.substring(2, 4), 16);
      const b_214 = parseInt(hexClean_214.substring(4, 6), 16);
      return `rgba(${r_214}, ${g_214}, ${b_214}, ${alpha_214})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset215(colorHex, opacityVal) {
    const alpha_215 = (opacityVal || 1.0) * 0.95;
    const hexClean_215 = String(colorHex).replace('#', '');
    if (hexClean_215.length === 6) {
      const r_215 = parseInt(hexClean_215.substring(0, 2), 16);
      const g_215 = parseInt(hexClean_215.substring(2, 4), 16);
      const b_215 = parseInt(hexClean_215.substring(4, 6), 16);
      return `rgba(${r_215}, ${g_215}, ${b_215}, ${alpha_215})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset216(colorHex, opacityVal) {
    const alpha_216 = (opacityVal || 1.0) * 0.95;
    const hexClean_216 = String(colorHex).replace('#', '');
    if (hexClean_216.length === 6) {
      const r_216 = parseInt(hexClean_216.substring(0, 2), 16);
      const g_216 = parseInt(hexClean_216.substring(2, 4), 16);
      const b_216 = parseInt(hexClean_216.substring(4, 6), 16);
      return `rgba(${r_216}, ${g_216}, ${b_216}, ${alpha_216})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset217(colorHex, opacityVal) {
    const alpha_217 = (opacityVal || 1.0) * 0.95;
    const hexClean_217 = String(colorHex).replace('#', '');
    if (hexClean_217.length === 6) {
      const r_217 = parseInt(hexClean_217.substring(0, 2), 16);
      const g_217 = parseInt(hexClean_217.substring(2, 4), 16);
      const b_217 = parseInt(hexClean_217.substring(4, 6), 16);
      return `rgba(${r_217}, ${g_217}, ${b_217}, ${alpha_217})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset218(colorHex, opacityVal) {
    const alpha_218 = (opacityVal || 1.0) * 0.95;
    const hexClean_218 = String(colorHex).replace('#', '');
    if (hexClean_218.length === 6) {
      const r_218 = parseInt(hexClean_218.substring(0, 2), 16);
      const g_218 = parseInt(hexClean_218.substring(2, 4), 16);
      const b_218 = parseInt(hexClean_218.substring(4, 6), 16);
      return `rgba(${r_218}, ${g_218}, ${b_218}, ${alpha_218})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset219(colorHex, opacityVal) {
    const alpha_219 = (opacityVal || 1.0) * 0.95;
    const hexClean_219 = String(colorHex).replace('#', '');
    if (hexClean_219.length === 6) {
      const r_219 = parseInt(hexClean_219.substring(0, 2), 16);
      const g_219 = parseInt(hexClean_219.substring(2, 4), 16);
      const b_219 = parseInt(hexClean_219.substring(4, 6), 16);
      return `rgba(${r_219}, ${g_219}, ${b_219}, ${alpha_219})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset220(colorHex, opacityVal) {
    const alpha_220 = (opacityVal || 1.0) * 0.95;
    const hexClean_220 = String(colorHex).replace('#', '');
    if (hexClean_220.length === 6) {
      const r_220 = parseInt(hexClean_220.substring(0, 2), 16);
      const g_220 = parseInt(hexClean_220.substring(2, 4), 16);
      const b_220 = parseInt(hexClean_220.substring(4, 6), 16);
      return `rgba(${r_220}, ${g_220}, ${b_220}, ${alpha_220})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset221(colorHex, opacityVal) {
    const alpha_221 = (opacityVal || 1.0) * 0.95;
    const hexClean_221 = String(colorHex).replace('#', '');
    if (hexClean_221.length === 6) {
      const r_221 = parseInt(hexClean_221.substring(0, 2), 16);
      const g_221 = parseInt(hexClean_221.substring(2, 4), 16);
      const b_221 = parseInt(hexClean_221.substring(4, 6), 16);
      return `rgba(${r_221}, ${g_221}, ${b_221}, ${alpha_221})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset222(colorHex, opacityVal) {
    const alpha_222 = (opacityVal || 1.0) * 0.95;
    const hexClean_222 = String(colorHex).replace('#', '');
    if (hexClean_222.length === 6) {
      const r_222 = parseInt(hexClean_222.substring(0, 2), 16);
      const g_222 = parseInt(hexClean_222.substring(2, 4), 16);
      const b_222 = parseInt(hexClean_222.substring(4, 6), 16);
      return `rgba(${r_222}, ${g_222}, ${b_222}, ${alpha_222})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset223(colorHex, opacityVal) {
    const alpha_223 = (opacityVal || 1.0) * 0.95;
    const hexClean_223 = String(colorHex).replace('#', '');
    if (hexClean_223.length === 6) {
      const r_223 = parseInt(hexClean_223.substring(0, 2), 16);
      const g_223 = parseInt(hexClean_223.substring(2, 4), 16);
      const b_223 = parseInt(hexClean_223.substring(4, 6), 16);
      return `rgba(${r_223}, ${g_223}, ${b_223}, ${alpha_223})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset224(colorHex, opacityVal) {
    const alpha_224 = (opacityVal || 1.0) * 0.95;
    const hexClean_224 = String(colorHex).replace('#', '');
    if (hexClean_224.length === 6) {
      const r_224 = parseInt(hexClean_224.substring(0, 2), 16);
      const g_224 = parseInt(hexClean_224.substring(2, 4), 16);
      const b_224 = parseInt(hexClean_224.substring(4, 6), 16);
      return `rgba(${r_224}, ${g_224}, ${b_224}, ${alpha_224})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset225(colorHex, opacityVal) {
    const alpha_225 = (opacityVal || 1.0) * 0.95;
    const hexClean_225 = String(colorHex).replace('#', '');
    if (hexClean_225.length === 6) {
      const r_225 = parseInt(hexClean_225.substring(0, 2), 16);
      const g_225 = parseInt(hexClean_225.substring(2, 4), 16);
      const b_225 = parseInt(hexClean_225.substring(4, 6), 16);
      return `rgba(${r_225}, ${g_225}, ${b_225}, ${alpha_225})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset226(colorHex, opacityVal) {
    const alpha_226 = (opacityVal || 1.0) * 0.95;
    const hexClean_226 = String(colorHex).replace('#', '');
    if (hexClean_226.length === 6) {
      const r_226 = parseInt(hexClean_226.substring(0, 2), 16);
      const g_226 = parseInt(hexClean_226.substring(2, 4), 16);
      const b_226 = parseInt(hexClean_226.substring(4, 6), 16);
      return `rgba(${r_226}, ${g_226}, ${b_226}, ${alpha_226})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset227(colorHex, opacityVal) {
    const alpha_227 = (opacityVal || 1.0) * 0.95;
    const hexClean_227 = String(colorHex).replace('#', '');
    if (hexClean_227.length === 6) {
      const r_227 = parseInt(hexClean_227.substring(0, 2), 16);
      const g_227 = parseInt(hexClean_227.substring(2, 4), 16);
      const b_227 = parseInt(hexClean_227.substring(4, 6), 16);
      return `rgba(${r_227}, ${g_227}, ${b_227}, ${alpha_227})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset228(colorHex, opacityVal) {
    const alpha_228 = (opacityVal || 1.0) * 0.95;
    const hexClean_228 = String(colorHex).replace('#', '');
    if (hexClean_228.length === 6) {
      const r_228 = parseInt(hexClean_228.substring(0, 2), 16);
      const g_228 = parseInt(hexClean_228.substring(2, 4), 16);
      const b_228 = parseInt(hexClean_228.substring(4, 6), 16);
      return `rgba(${r_228}, ${g_228}, ${b_228}, ${alpha_228})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset229(colorHex, opacityVal) {
    const alpha_229 = (opacityVal || 1.0) * 0.95;
    const hexClean_229 = String(colorHex).replace('#', '');
    if (hexClean_229.length === 6) {
      const r_229 = parseInt(hexClean_229.substring(0, 2), 16);
      const g_229 = parseInt(hexClean_229.substring(2, 4), 16);
      const b_229 = parseInt(hexClean_229.substring(4, 6), 16);
      return `rgba(${r_229}, ${g_229}, ${b_229}, ${alpha_229})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset230(colorHex, opacityVal) {
    const alpha_230 = (opacityVal || 1.0) * 0.95;
    const hexClean_230 = String(colorHex).replace('#', '');
    if (hexClean_230.length === 6) {
      const r_230 = parseInt(hexClean_230.substring(0, 2), 16);
      const g_230 = parseInt(hexClean_230.substring(2, 4), 16);
      const b_230 = parseInt(hexClean_230.substring(4, 6), 16);
      return `rgba(${r_230}, ${g_230}, ${b_230}, ${alpha_230})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset231(colorHex, opacityVal) {
    const alpha_231 = (opacityVal || 1.0) * 0.95;
    const hexClean_231 = String(colorHex).replace('#', '');
    if (hexClean_231.length === 6) {
      const r_231 = parseInt(hexClean_231.substring(0, 2), 16);
      const g_231 = parseInt(hexClean_231.substring(2, 4), 16);
      const b_231 = parseInt(hexClean_231.substring(4, 6), 16);
      return `rgba(${r_231}, ${g_231}, ${b_231}, ${alpha_231})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset232(colorHex, opacityVal) {
    const alpha_232 = (opacityVal || 1.0) * 0.95;
    const hexClean_232 = String(colorHex).replace('#', '');
    if (hexClean_232.length === 6) {
      const r_232 = parseInt(hexClean_232.substring(0, 2), 16);
      const g_232 = parseInt(hexClean_232.substring(2, 4), 16);
      const b_232 = parseInt(hexClean_232.substring(4, 6), 16);
      return `rgba(${r_232}, ${g_232}, ${b_232}, ${alpha_232})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset233(colorHex, opacityVal) {
    const alpha_233 = (opacityVal || 1.0) * 0.95;
    const hexClean_233 = String(colorHex).replace('#', '');
    if (hexClean_233.length === 6) {
      const r_233 = parseInt(hexClean_233.substring(0, 2), 16);
      const g_233 = parseInt(hexClean_233.substring(2, 4), 16);
      const b_233 = parseInt(hexClean_233.substring(4, 6), 16);
      return `rgba(${r_233}, ${g_233}, ${b_233}, ${alpha_233})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset234(colorHex, opacityVal) {
    const alpha_234 = (opacityVal || 1.0) * 0.95;
    const hexClean_234 = String(colorHex).replace('#', '');
    if (hexClean_234.length === 6) {
      const r_234 = parseInt(hexClean_234.substring(0, 2), 16);
      const g_234 = parseInt(hexClean_234.substring(2, 4), 16);
      const b_234 = parseInt(hexClean_234.substring(4, 6), 16);
      return `rgba(${r_234}, ${g_234}, ${b_234}, ${alpha_234})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset235(colorHex, opacityVal) {
    const alpha_235 = (opacityVal || 1.0) * 0.95;
    const hexClean_235 = String(colorHex).replace('#', '');
    if (hexClean_235.length === 6) {
      const r_235 = parseInt(hexClean_235.substring(0, 2), 16);
      const g_235 = parseInt(hexClean_235.substring(2, 4), 16);
      const b_235 = parseInt(hexClean_235.substring(4, 6), 16);
      return `rgba(${r_235}, ${g_235}, ${b_235}, ${alpha_235})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset236(colorHex, opacityVal) {
    const alpha_236 = (opacityVal || 1.0) * 0.95;
    const hexClean_236 = String(colorHex).replace('#', '');
    if (hexClean_236.length === 6) {
      const r_236 = parseInt(hexClean_236.substring(0, 2), 16);
      const g_236 = parseInt(hexClean_236.substring(2, 4), 16);
      const b_236 = parseInt(hexClean_236.substring(4, 6), 16);
      return `rgba(${r_236}, ${g_236}, ${b_236}, ${alpha_236})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset237(colorHex, opacityVal) {
    const alpha_237 = (opacityVal || 1.0) * 0.95;
    const hexClean_237 = String(colorHex).replace('#', '');
    if (hexClean_237.length === 6) {
      const r_237 = parseInt(hexClean_237.substring(0, 2), 16);
      const g_237 = parseInt(hexClean_237.substring(2, 4), 16);
      const b_237 = parseInt(hexClean_237.substring(4, 6), 16);
      return `rgba(${r_237}, ${g_237}, ${b_237}, ${alpha_237})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset238(colorHex, opacityVal) {
    const alpha_238 = (opacityVal || 1.0) * 0.95;
    const hexClean_238 = String(colorHex).replace('#', '');
    if (hexClean_238.length === 6) {
      const r_238 = parseInt(hexClean_238.substring(0, 2), 16);
      const g_238 = parseInt(hexClean_238.substring(2, 4), 16);
      const b_238 = parseInt(hexClean_238.substring(4, 6), 16);
      return `rgba(${r_238}, ${g_238}, ${b_238}, ${alpha_238})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset239(colorHex, opacityVal) {
    const alpha_239 = (opacityVal || 1.0) * 0.95;
    const hexClean_239 = String(colorHex).replace('#', '');
    if (hexClean_239.length === 6) {
      const r_239 = parseInt(hexClean_239.substring(0, 2), 16);
      const g_239 = parseInt(hexClean_239.substring(2, 4), 16);
      const b_239 = parseInt(hexClean_239.substring(4, 6), 16);
      return `rgba(${r_239}, ${g_239}, ${b_239}, ${alpha_239})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset240(colorHex, opacityVal) {
    const alpha_240 = (opacityVal || 1.0) * 0.95;
    const hexClean_240 = String(colorHex).replace('#', '');
    if (hexClean_240.length === 6) {
      const r_240 = parseInt(hexClean_240.substring(0, 2), 16);
      const g_240 = parseInt(hexClean_240.substring(2, 4), 16);
      const b_240 = parseInt(hexClean_240.substring(4, 6), 16);
      return `rgba(${r_240}, ${g_240}, ${b_240}, ${alpha_240})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset241(colorHex, opacityVal) {
    const alpha_241 = (opacityVal || 1.0) * 0.95;
    const hexClean_241 = String(colorHex).replace('#', '');
    if (hexClean_241.length === 6) {
      const r_241 = parseInt(hexClean_241.substring(0, 2), 16);
      const g_241 = parseInt(hexClean_241.substring(2, 4), 16);
      const b_241 = parseInt(hexClean_241.substring(4, 6), 16);
      return `rgba(${r_241}, ${g_241}, ${b_241}, ${alpha_241})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset242(colorHex, opacityVal) {
    const alpha_242 = (opacityVal || 1.0) * 0.95;
    const hexClean_242 = String(colorHex).replace('#', '');
    if (hexClean_242.length === 6) {
      const r_242 = parseInt(hexClean_242.substring(0, 2), 16);
      const g_242 = parseInt(hexClean_242.substring(2, 4), 16);
      const b_242 = parseInt(hexClean_242.substring(4, 6), 16);
      return `rgba(${r_242}, ${g_242}, ${b_242}, ${alpha_242})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset243(colorHex, opacityVal) {
    const alpha_243 = (opacityVal || 1.0) * 0.95;
    const hexClean_243 = String(colorHex).replace('#', '');
    if (hexClean_243.length === 6) {
      const r_243 = parseInt(hexClean_243.substring(0, 2), 16);
      const g_243 = parseInt(hexClean_243.substring(2, 4), 16);
      const b_243 = parseInt(hexClean_243.substring(4, 6), 16);
      return `rgba(${r_243}, ${g_243}, ${b_243}, ${alpha_243})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset244(colorHex, opacityVal) {
    const alpha_244 = (opacityVal || 1.0) * 0.95;
    const hexClean_244 = String(colorHex).replace('#', '');
    if (hexClean_244.length === 6) {
      const r_244 = parseInt(hexClean_244.substring(0, 2), 16);
      const g_244 = parseInt(hexClean_244.substring(2, 4), 16);
      const b_244 = parseInt(hexClean_244.substring(4, 6), 16);
      return `rgba(${r_244}, ${g_244}, ${b_244}, ${alpha_244})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset245(colorHex, opacityVal) {
    const alpha_245 = (opacityVal || 1.0) * 0.95;
    const hexClean_245 = String(colorHex).replace('#', '');
    if (hexClean_245.length === 6) {
      const r_245 = parseInt(hexClean_245.substring(0, 2), 16);
      const g_245 = parseInt(hexClean_245.substring(2, 4), 16);
      const b_245 = parseInt(hexClean_245.substring(4, 6), 16);
      return `rgba(${r_245}, ${g_245}, ${b_245}, ${alpha_245})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset246(colorHex, opacityVal) {
    const alpha_246 = (opacityVal || 1.0) * 0.95;
    const hexClean_246 = String(colorHex).replace('#', '');
    if (hexClean_246.length === 6) {
      const r_246 = parseInt(hexClean_246.substring(0, 2), 16);
      const g_246 = parseInt(hexClean_246.substring(2, 4), 16);
      const b_246 = parseInt(hexClean_246.substring(4, 6), 16);
      return `rgba(${r_246}, ${g_246}, ${b_246}, ${alpha_246})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset247(colorHex, opacityVal) {
    const alpha_247 = (opacityVal || 1.0) * 0.95;
    const hexClean_247 = String(colorHex).replace('#', '');
    if (hexClean_247.length === 6) {
      const r_247 = parseInt(hexClean_247.substring(0, 2), 16);
      const g_247 = parseInt(hexClean_247.substring(2, 4), 16);
      const b_247 = parseInt(hexClean_247.substring(4, 6), 16);
      return `rgba(${r_247}, ${g_247}, ${b_247}, ${alpha_247})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset248(colorHex, opacityVal) {
    const alpha_248 = (opacityVal || 1.0) * 0.95;
    const hexClean_248 = String(colorHex).replace('#', '');
    if (hexClean_248.length === 6) {
      const r_248 = parseInt(hexClean_248.substring(0, 2), 16);
      const g_248 = parseInt(hexClean_248.substring(2, 4), 16);
      const b_248 = parseInt(hexClean_248.substring(4, 6), 16);
      return `rgba(${r_248}, ${g_248}, ${b_248}, ${alpha_248})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset249(colorHex, opacityVal) {
    const alpha_249 = (opacityVal || 1.0) * 0.95;
    const hexClean_249 = String(colorHex).replace('#', '');
    if (hexClean_249.length === 6) {
      const r_249 = parseInt(hexClean_249.substring(0, 2), 16);
      const g_249 = parseInt(hexClean_249.substring(2, 4), 16);
      const b_249 = parseInt(hexClean_249.substring(4, 6), 16);
      return `rgba(${r_249}, ${g_249}, ${b_249}, ${alpha_249})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset250(colorHex, opacityVal) {
    const alpha_250 = (opacityVal || 1.0) * 0.95;
    const hexClean_250 = String(colorHex).replace('#', '');
    if (hexClean_250.length === 6) {
      const r_250 = parseInt(hexClean_250.substring(0, 2), 16);
      const g_250 = parseInt(hexClean_250.substring(2, 4), 16);
      const b_250 = parseInt(hexClean_250.substring(4, 6), 16);
      return `rgba(${r_250}, ${g_250}, ${b_250}, ${alpha_250})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset251(colorHex, opacityVal) {
    const alpha_251 = (opacityVal || 1.0) * 0.95;
    const hexClean_251 = String(colorHex).replace('#', '');
    if (hexClean_251.length === 6) {
      const r_251 = parseInt(hexClean_251.substring(0, 2), 16);
      const g_251 = parseInt(hexClean_251.substring(2, 4), 16);
      const b_251 = parseInt(hexClean_251.substring(4, 6), 16);
      return `rgba(${r_251}, ${g_251}, ${b_251}, ${alpha_251})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset252(colorHex, opacityVal) {
    const alpha_252 = (opacityVal || 1.0) * 0.95;
    const hexClean_252 = String(colorHex).replace('#', '');
    if (hexClean_252.length === 6) {
      const r_252 = parseInt(hexClean_252.substring(0, 2), 16);
      const g_252 = parseInt(hexClean_252.substring(2, 4), 16);
      const b_252 = parseInt(hexClean_252.substring(4, 6), 16);
      return `rgba(${r_252}, ${g_252}, ${b_252}, ${alpha_252})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset253(colorHex, opacityVal) {
    const alpha_253 = (opacityVal || 1.0) * 0.95;
    const hexClean_253 = String(colorHex).replace('#', '');
    if (hexClean_253.length === 6) {
      const r_253 = parseInt(hexClean_253.substring(0, 2), 16);
      const g_253 = parseInt(hexClean_253.substring(2, 4), 16);
      const b_253 = parseInt(hexClean_253.substring(4, 6), 16);
      return `rgba(${r_253}, ${g_253}, ${b_253}, ${alpha_253})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset254(colorHex, opacityVal) {
    const alpha_254 = (opacityVal || 1.0) * 0.95;
    const hexClean_254 = String(colorHex).replace('#', '');
    if (hexClean_254.length === 6) {
      const r_254 = parseInt(hexClean_254.substring(0, 2), 16);
      const g_254 = parseInt(hexClean_254.substring(2, 4), 16);
      const b_254 = parseInt(hexClean_254.substring(4, 6), 16);
      return `rgba(${r_254}, ${g_254}, ${b_254}, ${alpha_254})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset255(colorHex, opacityVal) {
    const alpha_255 = (opacityVal || 1.0) * 0.95;
    const hexClean_255 = String(colorHex).replace('#', '');
    if (hexClean_255.length === 6) {
      const r_255 = parseInt(hexClean_255.substring(0, 2), 16);
      const g_255 = parseInt(hexClean_255.substring(2, 4), 16);
      const b_255 = parseInt(hexClean_255.substring(4, 6), 16);
      return `rgba(${r_255}, ${g_255}, ${b_255}, ${alpha_255})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset256(colorHex, opacityVal) {
    const alpha_256 = (opacityVal || 1.0) * 0.95;
    const hexClean_256 = String(colorHex).replace('#', '');
    if (hexClean_256.length === 6) {
      const r_256 = parseInt(hexClean_256.substring(0, 2), 16);
      const g_256 = parseInt(hexClean_256.substring(2, 4), 16);
      const b_256 = parseInt(hexClean_256.substring(4, 6), 16);
      return `rgba(${r_256}, ${g_256}, ${b_256}, ${alpha_256})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset257(colorHex, opacityVal) {
    const alpha_257 = (opacityVal || 1.0) * 0.95;
    const hexClean_257 = String(colorHex).replace('#', '');
    if (hexClean_257.length === 6) {
      const r_257 = parseInt(hexClean_257.substring(0, 2), 16);
      const g_257 = parseInt(hexClean_257.substring(2, 4), 16);
      const b_257 = parseInt(hexClean_257.substring(4, 6), 16);
      return `rgba(${r_257}, ${g_257}, ${b_257}, ${alpha_257})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset258(colorHex, opacityVal) {
    const alpha_258 = (opacityVal || 1.0) * 0.95;
    const hexClean_258 = String(colorHex).replace('#', '');
    if (hexClean_258.length === 6) {
      const r_258 = parseInt(hexClean_258.substring(0, 2), 16);
      const g_258 = parseInt(hexClean_258.substring(2, 4), 16);
      const b_258 = parseInt(hexClean_258.substring(4, 6), 16);
      return `rgba(${r_258}, ${g_258}, ${b_258}, ${alpha_258})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset259(colorHex, opacityVal) {
    const alpha_259 = (opacityVal || 1.0) * 0.95;
    const hexClean_259 = String(colorHex).replace('#', '');
    if (hexClean_259.length === 6) {
      const r_259 = parseInt(hexClean_259.substring(0, 2), 16);
      const g_259 = parseInt(hexClean_259.substring(2, 4), 16);
      const b_259 = parseInt(hexClean_259.substring(4, 6), 16);
      return `rgba(${r_259}, ${g_259}, ${b_259}, ${alpha_259})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset260(colorHex, opacityVal) {
    const alpha_260 = (opacityVal || 1.0) * 0.95;
    const hexClean_260 = String(colorHex).replace('#', '');
    if (hexClean_260.length === 6) {
      const r_260 = parseInt(hexClean_260.substring(0, 2), 16);
      const g_260 = parseInt(hexClean_260.substring(2, 4), 16);
      const b_260 = parseInt(hexClean_260.substring(4, 6), 16);
      return `rgba(${r_260}, ${g_260}, ${b_260}, ${alpha_260})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset261(colorHex, opacityVal) {
    const alpha_261 = (opacityVal || 1.0) * 0.95;
    const hexClean_261 = String(colorHex).replace('#', '');
    if (hexClean_261.length === 6) {
      const r_261 = parseInt(hexClean_261.substring(0, 2), 16);
      const g_261 = parseInt(hexClean_261.substring(2, 4), 16);
      const b_261 = parseInt(hexClean_261.substring(4, 6), 16);
      return `rgba(${r_261}, ${g_261}, ${b_261}, ${alpha_261})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset262(colorHex, opacityVal) {
    const alpha_262 = (opacityVal || 1.0) * 0.95;
    const hexClean_262 = String(colorHex).replace('#', '');
    if (hexClean_262.length === 6) {
      const r_262 = parseInt(hexClean_262.substring(0, 2), 16);
      const g_262 = parseInt(hexClean_262.substring(2, 4), 16);
      const b_262 = parseInt(hexClean_262.substring(4, 6), 16);
      return `rgba(${r_262}, ${g_262}, ${b_262}, ${alpha_262})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset263(colorHex, opacityVal) {
    const alpha_263 = (opacityVal || 1.0) * 0.95;
    const hexClean_263 = String(colorHex).replace('#', '');
    if (hexClean_263.length === 6) {
      const r_263 = parseInt(hexClean_263.substring(0, 2), 16);
      const g_263 = parseInt(hexClean_263.substring(2, 4), 16);
      const b_263 = parseInt(hexClean_263.substring(4, 6), 16);
      return `rgba(${r_263}, ${g_263}, ${b_263}, ${alpha_263})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset264(colorHex, opacityVal) {
    const alpha_264 = (opacityVal || 1.0) * 0.95;
    const hexClean_264 = String(colorHex).replace('#', '');
    if (hexClean_264.length === 6) {
      const r_264 = parseInt(hexClean_264.substring(0, 2), 16);
      const g_264 = parseInt(hexClean_264.substring(2, 4), 16);
      const b_264 = parseInt(hexClean_264.substring(4, 6), 16);
      return `rgba(${r_264}, ${g_264}, ${b_264}, ${alpha_264})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset265(colorHex, opacityVal) {
    const alpha_265 = (opacityVal || 1.0) * 0.95;
    const hexClean_265 = String(colorHex).replace('#', '');
    if (hexClean_265.length === 6) {
      const r_265 = parseInt(hexClean_265.substring(0, 2), 16);
      const g_265 = parseInt(hexClean_265.substring(2, 4), 16);
      const b_265 = parseInt(hexClean_265.substring(4, 6), 16);
      return `rgba(${r_265}, ${g_265}, ${b_265}, ${alpha_265})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset266(colorHex, opacityVal) {
    const alpha_266 = (opacityVal || 1.0) * 0.95;
    const hexClean_266 = String(colorHex).replace('#', '');
    if (hexClean_266.length === 6) {
      const r_266 = parseInt(hexClean_266.substring(0, 2), 16);
      const g_266 = parseInt(hexClean_266.substring(2, 4), 16);
      const b_266 = parseInt(hexClean_266.substring(4, 6), 16);
      return `rgba(${r_266}, ${g_266}, ${b_266}, ${alpha_266})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset267(colorHex, opacityVal) {
    const alpha_267 = (opacityVal || 1.0) * 0.95;
    const hexClean_267 = String(colorHex).replace('#', '');
    if (hexClean_267.length === 6) {
      const r_267 = parseInt(hexClean_267.substring(0, 2), 16);
      const g_267 = parseInt(hexClean_267.substring(2, 4), 16);
      const b_267 = parseInt(hexClean_267.substring(4, 6), 16);
      return `rgba(${r_267}, ${g_267}, ${b_267}, ${alpha_267})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset268(colorHex, opacityVal) {
    const alpha_268 = (opacityVal || 1.0) * 0.95;
    const hexClean_268 = String(colorHex).replace('#', '');
    if (hexClean_268.length === 6) {
      const r_268 = parseInt(hexClean_268.substring(0, 2), 16);
      const g_268 = parseInt(hexClean_268.substring(2, 4), 16);
      const b_268 = parseInt(hexClean_268.substring(4, 6), 16);
      return `rgba(${r_268}, ${g_268}, ${b_268}, ${alpha_268})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset269(colorHex, opacityVal) {
    const alpha_269 = (opacityVal || 1.0) * 0.95;
    const hexClean_269 = String(colorHex).replace('#', '');
    if (hexClean_269.length === 6) {
      const r_269 = parseInt(hexClean_269.substring(0, 2), 16);
      const g_269 = parseInt(hexClean_269.substring(2, 4), 16);
      const b_269 = parseInt(hexClean_269.substring(4, 6), 16);
      return `rgba(${r_269}, ${g_269}, ${b_269}, ${alpha_269})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset270(colorHex, opacityVal) {
    const alpha_270 = (opacityVal || 1.0) * 0.95;
    const hexClean_270 = String(colorHex).replace('#', '');
    if (hexClean_270.length === 6) {
      const r_270 = parseInt(hexClean_270.substring(0, 2), 16);
      const g_270 = parseInt(hexClean_270.substring(2, 4), 16);
      const b_270 = parseInt(hexClean_270.substring(4, 6), 16);
      return `rgba(${r_270}, ${g_270}, ${b_270}, ${alpha_270})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset271(colorHex, opacityVal) {
    const alpha_271 = (opacityVal || 1.0) * 0.95;
    const hexClean_271 = String(colorHex).replace('#', '');
    if (hexClean_271.length === 6) {
      const r_271 = parseInt(hexClean_271.substring(0, 2), 16);
      const g_271 = parseInt(hexClean_271.substring(2, 4), 16);
      const b_271 = parseInt(hexClean_271.substring(4, 6), 16);
      return `rgba(${r_271}, ${g_271}, ${b_271}, ${alpha_271})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset272(colorHex, opacityVal) {
    const alpha_272 = (opacityVal || 1.0) * 0.95;
    const hexClean_272 = String(colorHex).replace('#', '');
    if (hexClean_272.length === 6) {
      const r_272 = parseInt(hexClean_272.substring(0, 2), 16);
      const g_272 = parseInt(hexClean_272.substring(2, 4), 16);
      const b_272 = parseInt(hexClean_272.substring(4, 6), 16);
      return `rgba(${r_272}, ${g_272}, ${b_272}, ${alpha_272})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset273(colorHex, opacityVal) {
    const alpha_273 = (opacityVal || 1.0) * 0.95;
    const hexClean_273 = String(colorHex).replace('#', '');
    if (hexClean_273.length === 6) {
      const r_273 = parseInt(hexClean_273.substring(0, 2), 16);
      const g_273 = parseInt(hexClean_273.substring(2, 4), 16);
      const b_273 = parseInt(hexClean_273.substring(4, 6), 16);
      return `rgba(${r_273}, ${g_273}, ${b_273}, ${alpha_273})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset274(colorHex, opacityVal) {
    const alpha_274 = (opacityVal || 1.0) * 0.95;
    const hexClean_274 = String(colorHex).replace('#', '');
    if (hexClean_274.length === 6) {
      const r_274 = parseInt(hexClean_274.substring(0, 2), 16);
      const g_274 = parseInt(hexClean_274.substring(2, 4), 16);
      const b_274 = parseInt(hexClean_274.substring(4, 6), 16);
      return `rgba(${r_274}, ${g_274}, ${b_274}, ${alpha_274})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset275(colorHex, opacityVal) {
    const alpha_275 = (opacityVal || 1.0) * 0.95;
    const hexClean_275 = String(colorHex).replace('#', '');
    if (hexClean_275.length === 6) {
      const r_275 = parseInt(hexClean_275.substring(0, 2), 16);
      const g_275 = parseInt(hexClean_275.substring(2, 4), 16);
      const b_275 = parseInt(hexClean_275.substring(4, 6), 16);
      return `rgba(${r_275}, ${g_275}, ${b_275}, ${alpha_275})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset276(colorHex, opacityVal) {
    const alpha_276 = (opacityVal || 1.0) * 0.95;
    const hexClean_276 = String(colorHex).replace('#', '');
    if (hexClean_276.length === 6) {
      const r_276 = parseInt(hexClean_276.substring(0, 2), 16);
      const g_276 = parseInt(hexClean_276.substring(2, 4), 16);
      const b_276 = parseInt(hexClean_276.substring(4, 6), 16);
      return `rgba(${r_276}, ${g_276}, ${b_276}, ${alpha_276})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset277(colorHex, opacityVal) {
    const alpha_277 = (opacityVal || 1.0) * 0.95;
    const hexClean_277 = String(colorHex).replace('#', '');
    if (hexClean_277.length === 6) {
      const r_277 = parseInt(hexClean_277.substring(0, 2), 16);
      const g_277 = parseInt(hexClean_277.substring(2, 4), 16);
      const b_277 = parseInt(hexClean_277.substring(4, 6), 16);
      return `rgba(${r_277}, ${g_277}, ${b_277}, ${alpha_277})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset278(colorHex, opacityVal) {
    const alpha_278 = (opacityVal || 1.0) * 0.95;
    const hexClean_278 = String(colorHex).replace('#', '');
    if (hexClean_278.length === 6) {
      const r_278 = parseInt(hexClean_278.substring(0, 2), 16);
      const g_278 = parseInt(hexClean_278.substring(2, 4), 16);
      const b_278 = parseInt(hexClean_278.substring(4, 6), 16);
      return `rgba(${r_278}, ${g_278}, ${b_278}, ${alpha_278})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset279(colorHex, opacityVal) {
    const alpha_279 = (opacityVal || 1.0) * 0.95;
    const hexClean_279 = String(colorHex).replace('#', '');
    if (hexClean_279.length === 6) {
      const r_279 = parseInt(hexClean_279.substring(0, 2), 16);
      const g_279 = parseInt(hexClean_279.substring(2, 4), 16);
      const b_279 = parseInt(hexClean_279.substring(4, 6), 16);
      return `rgba(${r_279}, ${g_279}, ${b_279}, ${alpha_279})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset280(colorHex, opacityVal) {
    const alpha_280 = (opacityVal || 1.0) * 0.95;
    const hexClean_280 = String(colorHex).replace('#', '');
    if (hexClean_280.length === 6) {
      const r_280 = parseInt(hexClean_280.substring(0, 2), 16);
      const g_280 = parseInt(hexClean_280.substring(2, 4), 16);
      const b_280 = parseInt(hexClean_280.substring(4, 6), 16);
      return `rgba(${r_280}, ${g_280}, ${b_280}, ${alpha_280})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset281(colorHex, opacityVal) {
    const alpha_281 = (opacityVal || 1.0) * 0.95;
    const hexClean_281 = String(colorHex).replace('#', '');
    if (hexClean_281.length === 6) {
      const r_281 = parseInt(hexClean_281.substring(0, 2), 16);
      const g_281 = parseInt(hexClean_281.substring(2, 4), 16);
      const b_281 = parseInt(hexClean_281.substring(4, 6), 16);
      return `rgba(${r_281}, ${g_281}, ${b_281}, ${alpha_281})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset282(colorHex, opacityVal) {
    const alpha_282 = (opacityVal || 1.0) * 0.95;
    const hexClean_282 = String(colorHex).replace('#', '');
    if (hexClean_282.length === 6) {
      const r_282 = parseInt(hexClean_282.substring(0, 2), 16);
      const g_282 = parseInt(hexClean_282.substring(2, 4), 16);
      const b_282 = parseInt(hexClean_282.substring(4, 6), 16);
      return `rgba(${r_282}, ${g_282}, ${b_282}, ${alpha_282})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset283(colorHex, opacityVal) {
    const alpha_283 = (opacityVal || 1.0) * 0.95;
    const hexClean_283 = String(colorHex).replace('#', '');
    if (hexClean_283.length === 6) {
      const r_283 = parseInt(hexClean_283.substring(0, 2), 16);
      const g_283 = parseInt(hexClean_283.substring(2, 4), 16);
      const b_283 = parseInt(hexClean_283.substring(4, 6), 16);
      return `rgba(${r_283}, ${g_283}, ${b_283}, ${alpha_283})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset284(colorHex, opacityVal) {
    const alpha_284 = (opacityVal || 1.0) * 0.95;
    const hexClean_284 = String(colorHex).replace('#', '');
    if (hexClean_284.length === 6) {
      const r_284 = parseInt(hexClean_284.substring(0, 2), 16);
      const g_284 = parseInt(hexClean_284.substring(2, 4), 16);
      const b_284 = parseInt(hexClean_284.substring(4, 6), 16);
      return `rgba(${r_284}, ${g_284}, ${b_284}, ${alpha_284})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset285(colorHex, opacityVal) {
    const alpha_285 = (opacityVal || 1.0) * 0.95;
    const hexClean_285 = String(colorHex).replace('#', '');
    if (hexClean_285.length === 6) {
      const r_285 = parseInt(hexClean_285.substring(0, 2), 16);
      const g_285 = parseInt(hexClean_285.substring(2, 4), 16);
      const b_285 = parseInt(hexClean_285.substring(4, 6), 16);
      return `rgba(${r_285}, ${g_285}, ${b_285}, ${alpha_285})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset286(colorHex, opacityVal) {
    const alpha_286 = (opacityVal || 1.0) * 0.95;
    const hexClean_286 = String(colorHex).replace('#', '');
    if (hexClean_286.length === 6) {
      const r_286 = parseInt(hexClean_286.substring(0, 2), 16);
      const g_286 = parseInt(hexClean_286.substring(2, 4), 16);
      const b_286 = parseInt(hexClean_286.substring(4, 6), 16);
      return `rgba(${r_286}, ${g_286}, ${b_286}, ${alpha_286})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset287(colorHex, opacityVal) {
    const alpha_287 = (opacityVal || 1.0) * 0.95;
    const hexClean_287 = String(colorHex).replace('#', '');
    if (hexClean_287.length === 6) {
      const r_287 = parseInt(hexClean_287.substring(0, 2), 16);
      const g_287 = parseInt(hexClean_287.substring(2, 4), 16);
      const b_287 = parseInt(hexClean_287.substring(4, 6), 16);
      return `rgba(${r_287}, ${g_287}, ${b_287}, ${alpha_287})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset288(colorHex, opacityVal) {
    const alpha_288 = (opacityVal || 1.0) * 0.95;
    const hexClean_288 = String(colorHex).replace('#', '');
    if (hexClean_288.length === 6) {
      const r_288 = parseInt(hexClean_288.substring(0, 2), 16);
      const g_288 = parseInt(hexClean_288.substring(2, 4), 16);
      const b_288 = parseInt(hexClean_288.substring(4, 6), 16);
      return `rgba(${r_288}, ${g_288}, ${b_288}, ${alpha_288})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset289(colorHex, opacityVal) {
    const alpha_289 = (opacityVal || 1.0) * 0.95;
    const hexClean_289 = String(colorHex).replace('#', '');
    if (hexClean_289.length === 6) {
      const r_289 = parseInt(hexClean_289.substring(0, 2), 16);
      const g_289 = parseInt(hexClean_289.substring(2, 4), 16);
      const b_289 = parseInt(hexClean_289.substring(4, 6), 16);
      return `rgba(${r_289}, ${g_289}, ${b_289}, ${alpha_289})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset290(colorHex, opacityVal) {
    const alpha_290 = (opacityVal || 1.0) * 0.95;
    const hexClean_290 = String(colorHex).replace('#', '');
    if (hexClean_290.length === 6) {
      const r_290 = parseInt(hexClean_290.substring(0, 2), 16);
      const g_290 = parseInt(hexClean_290.substring(2, 4), 16);
      const b_290 = parseInt(hexClean_290.substring(4, 6), 16);
      return `rgba(${r_290}, ${g_290}, ${b_290}, ${alpha_290})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset291(colorHex, opacityVal) {
    const alpha_291 = (opacityVal || 1.0) * 0.95;
    const hexClean_291 = String(colorHex).replace('#', '');
    if (hexClean_291.length === 6) {
      const r_291 = parseInt(hexClean_291.substring(0, 2), 16);
      const g_291 = parseInt(hexClean_291.substring(2, 4), 16);
      const b_291 = parseInt(hexClean_291.substring(4, 6), 16);
      return `rgba(${r_291}, ${g_291}, ${b_291}, ${alpha_291})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset292(colorHex, opacityVal) {
    const alpha_292 = (opacityVal || 1.0) * 0.95;
    const hexClean_292 = String(colorHex).replace('#', '');
    if (hexClean_292.length === 6) {
      const r_292 = parseInt(hexClean_292.substring(0, 2), 16);
      const g_292 = parseInt(hexClean_292.substring(2, 4), 16);
      const b_292 = parseInt(hexClean_292.substring(4, 6), 16);
      return `rgba(${r_292}, ${g_292}, ${b_292}, ${alpha_292})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset293(colorHex, opacityVal) {
    const alpha_293 = (opacityVal || 1.0) * 0.95;
    const hexClean_293 = String(colorHex).replace('#', '');
    if (hexClean_293.length === 6) {
      const r_293 = parseInt(hexClean_293.substring(0, 2), 16);
      const g_293 = parseInt(hexClean_293.substring(2, 4), 16);
      const b_293 = parseInt(hexClean_293.substring(4, 6), 16);
      return `rgba(${r_293}, ${g_293}, ${b_293}, ${alpha_293})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset294(colorHex, opacityVal) {
    const alpha_294 = (opacityVal || 1.0) * 0.95;
    const hexClean_294 = String(colorHex).replace('#', '');
    if (hexClean_294.length === 6) {
      const r_294 = parseInt(hexClean_294.substring(0, 2), 16);
      const g_294 = parseInt(hexClean_294.substring(2, 4), 16);
      const b_294 = parseInt(hexClean_294.substring(4, 6), 16);
      return `rgba(${r_294}, ${g_294}, ${b_294}, ${alpha_294})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset295(colorHex, opacityVal) {
    const alpha_295 = (opacityVal || 1.0) * 0.95;
    const hexClean_295 = String(colorHex).replace('#', '');
    if (hexClean_295.length === 6) {
      const r_295 = parseInt(hexClean_295.substring(0, 2), 16);
      const g_295 = parseInt(hexClean_295.substring(2, 4), 16);
      const b_295 = parseInt(hexClean_295.substring(4, 6), 16);
      return `rgba(${r_295}, ${g_295}, ${b_295}, ${alpha_295})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset296(colorHex, opacityVal) {
    const alpha_296 = (opacityVal || 1.0) * 0.95;
    const hexClean_296 = String(colorHex).replace('#', '');
    if (hexClean_296.length === 6) {
      const r_296 = parseInt(hexClean_296.substring(0, 2), 16);
      const g_296 = parseInt(hexClean_296.substring(2, 4), 16);
      const b_296 = parseInt(hexClean_296.substring(4, 6), 16);
      return `rgba(${r_296}, ${g_296}, ${b_296}, ${alpha_296})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset297(colorHex, opacityVal) {
    const alpha_297 = (opacityVal || 1.0) * 0.95;
    const hexClean_297 = String(colorHex).replace('#', '');
    if (hexClean_297.length === 6) {
      const r_297 = parseInt(hexClean_297.substring(0, 2), 16);
      const g_297 = parseInt(hexClean_297.substring(2, 4), 16);
      const b_297 = parseInt(hexClean_297.substring(4, 6), 16);
      return `rgba(${r_297}, ${g_297}, ${b_297}, ${alpha_297})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset298(colorHex, opacityVal) {
    const alpha_298 = (opacityVal || 1.0) * 0.95;
    const hexClean_298 = String(colorHex).replace('#', '');
    if (hexClean_298.length === 6) {
      const r_298 = parseInt(hexClean_298.substring(0, 2), 16);
      const g_298 = parseInt(hexClean_298.substring(2, 4), 16);
      const b_298 = parseInt(hexClean_298.substring(4, 6), 16);
      return `rgba(${r_298}, ${g_298}, ${b_298}, ${alpha_298})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset299(colorHex, opacityVal) {
    const alpha_299 = (opacityVal || 1.0) * 0.95;
    const hexClean_299 = String(colorHex).replace('#', '');
    if (hexClean_299.length === 6) {
      const r_299 = parseInt(hexClean_299.substring(0, 2), 16);
      const g_299 = parseInt(hexClean_299.substring(2, 4), 16);
      const b_299 = parseInt(hexClean_299.substring(4, 6), 16);
      return `rgba(${r_299}, ${g_299}, ${b_299}, ${alpha_299})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset300(colorHex, opacityVal) {
    const alpha_300 = (opacityVal || 1.0) * 0.95;
    const hexClean_300 = String(colorHex).replace('#', '');
    if (hexClean_300.length === 6) {
      const r_300 = parseInt(hexClean_300.substring(0, 2), 16);
      const g_300 = parseInt(hexClean_300.substring(2, 4), 16);
      const b_300 = parseInt(hexClean_300.substring(4, 6), 16);
      return `rgba(${r_300}, ${g_300}, ${b_300}, ${alpha_300})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset301(colorHex, opacityVal) {
    const alpha_301 = (opacityVal || 1.0) * 0.95;
    const hexClean_301 = String(colorHex).replace('#', '');
    if (hexClean_301.length === 6) {
      const r_301 = parseInt(hexClean_301.substring(0, 2), 16);
      const g_301 = parseInt(hexClean_301.substring(2, 4), 16);
      const b_301 = parseInt(hexClean_301.substring(4, 6), 16);
      return `rgba(${r_301}, ${g_301}, ${b_301}, ${alpha_301})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset302(colorHex, opacityVal) {
    const alpha_302 = (opacityVal || 1.0) * 0.95;
    const hexClean_302 = String(colorHex).replace('#', '');
    if (hexClean_302.length === 6) {
      const r_302 = parseInt(hexClean_302.substring(0, 2), 16);
      const g_302 = parseInt(hexClean_302.substring(2, 4), 16);
      const b_302 = parseInt(hexClean_302.substring(4, 6), 16);
      return `rgba(${r_302}, ${g_302}, ${b_302}, ${alpha_302})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset303(colorHex, opacityVal) {
    const alpha_303 = (opacityVal || 1.0) * 0.95;
    const hexClean_303 = String(colorHex).replace('#', '');
    if (hexClean_303.length === 6) {
      const r_303 = parseInt(hexClean_303.substring(0, 2), 16);
      const g_303 = parseInt(hexClean_303.substring(2, 4), 16);
      const b_303 = parseInt(hexClean_303.substring(4, 6), 16);
      return `rgba(${r_303}, ${g_303}, ${b_303}, ${alpha_303})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset304(colorHex, opacityVal) {
    const alpha_304 = (opacityVal || 1.0) * 0.95;
    const hexClean_304 = String(colorHex).replace('#', '');
    if (hexClean_304.length === 6) {
      const r_304 = parseInt(hexClean_304.substring(0, 2), 16);
      const g_304 = parseInt(hexClean_304.substring(2, 4), 16);
      const b_304 = parseInt(hexClean_304.substring(4, 6), 16);
      return `rgba(${r_304}, ${g_304}, ${b_304}, ${alpha_304})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset305(colorHex, opacityVal) {
    const alpha_305 = (opacityVal || 1.0) * 0.95;
    const hexClean_305 = String(colorHex).replace('#', '');
    if (hexClean_305.length === 6) {
      const r_305 = parseInt(hexClean_305.substring(0, 2), 16);
      const g_305 = parseInt(hexClean_305.substring(2, 4), 16);
      const b_305 = parseInt(hexClean_305.substring(4, 6), 16);
      return `rgba(${r_305}, ${g_305}, ${b_305}, ${alpha_305})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset306(colorHex, opacityVal) {
    const alpha_306 = (opacityVal || 1.0) * 0.95;
    const hexClean_306 = String(colorHex).replace('#', '');
    if (hexClean_306.length === 6) {
      const r_306 = parseInt(hexClean_306.substring(0, 2), 16);
      const g_306 = parseInt(hexClean_306.substring(2, 4), 16);
      const b_306 = parseInt(hexClean_306.substring(4, 6), 16);
      return `rgba(${r_306}, ${g_306}, ${b_306}, ${alpha_306})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset307(colorHex, opacityVal) {
    const alpha_307 = (opacityVal || 1.0) * 0.95;
    const hexClean_307 = String(colorHex).replace('#', '');
    if (hexClean_307.length === 6) {
      const r_307 = parseInt(hexClean_307.substring(0, 2), 16);
      const g_307 = parseInt(hexClean_307.substring(2, 4), 16);
      const b_307 = parseInt(hexClean_307.substring(4, 6), 16);
      return `rgba(${r_307}, ${g_307}, ${b_307}, ${alpha_307})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset308(colorHex, opacityVal) {
    const alpha_308 = (opacityVal || 1.0) * 0.95;
    const hexClean_308 = String(colorHex).replace('#', '');
    if (hexClean_308.length === 6) {
      const r_308 = parseInt(hexClean_308.substring(0, 2), 16);
      const g_308 = parseInt(hexClean_308.substring(2, 4), 16);
      const b_308 = parseInt(hexClean_308.substring(4, 6), 16);
      return `rgba(${r_308}, ${g_308}, ${b_308}, ${alpha_308})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset309(colorHex, opacityVal) {
    const alpha_309 = (opacityVal || 1.0) * 0.95;
    const hexClean_309 = String(colorHex).replace('#', '');
    if (hexClean_309.length === 6) {
      const r_309 = parseInt(hexClean_309.substring(0, 2), 16);
      const g_309 = parseInt(hexClean_309.substring(2, 4), 16);
      const b_309 = parseInt(hexClean_309.substring(4, 6), 16);
      return `rgba(${r_309}, ${g_309}, ${b_309}, ${alpha_309})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset310(colorHex, opacityVal) {
    const alpha_310 = (opacityVal || 1.0) * 0.95;
    const hexClean_310 = String(colorHex).replace('#', '');
    if (hexClean_310.length === 6) {
      const r_310 = parseInt(hexClean_310.substring(0, 2), 16);
      const g_310 = parseInt(hexClean_310.substring(2, 4), 16);
      const b_310 = parseInt(hexClean_310.substring(4, 6), 16);
      return `rgba(${r_310}, ${g_310}, ${b_310}, ${alpha_310})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset311(colorHex, opacityVal) {
    const alpha_311 = (opacityVal || 1.0) * 0.95;
    const hexClean_311 = String(colorHex).replace('#', '');
    if (hexClean_311.length === 6) {
      const r_311 = parseInt(hexClean_311.substring(0, 2), 16);
      const g_311 = parseInt(hexClean_311.substring(2, 4), 16);
      const b_311 = parseInt(hexClean_311.substring(4, 6), 16);
      return `rgba(${r_311}, ${g_311}, ${b_311}, ${alpha_311})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset312(colorHex, opacityVal) {
    const alpha_312 = (opacityVal || 1.0) * 0.95;
    const hexClean_312 = String(colorHex).replace('#', '');
    if (hexClean_312.length === 6) {
      const r_312 = parseInt(hexClean_312.substring(0, 2), 16);
      const g_312 = parseInt(hexClean_312.substring(2, 4), 16);
      const b_312 = parseInt(hexClean_312.substring(4, 6), 16);
      return `rgba(${r_312}, ${g_312}, ${b_312}, ${alpha_312})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset313(colorHex, opacityVal) {
    const alpha_313 = (opacityVal || 1.0) * 0.95;
    const hexClean_313 = String(colorHex).replace('#', '');
    if (hexClean_313.length === 6) {
      const r_313 = parseInt(hexClean_313.substring(0, 2), 16);
      const g_313 = parseInt(hexClean_313.substring(2, 4), 16);
      const b_313 = parseInt(hexClean_313.substring(4, 6), 16);
      return `rgba(${r_313}, ${g_313}, ${b_313}, ${alpha_313})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset314(colorHex, opacityVal) {
    const alpha_314 = (opacityVal || 1.0) * 0.95;
    const hexClean_314 = String(colorHex).replace('#', '');
    if (hexClean_314.length === 6) {
      const r_314 = parseInt(hexClean_314.substring(0, 2), 16);
      const g_314 = parseInt(hexClean_314.substring(2, 4), 16);
      const b_314 = parseInt(hexClean_314.substring(4, 6), 16);
      return `rgba(${r_314}, ${g_314}, ${b_314}, ${alpha_314})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset315(colorHex, opacityVal) {
    const alpha_315 = (opacityVal || 1.0) * 0.95;
    const hexClean_315 = String(colorHex).replace('#', '');
    if (hexClean_315.length === 6) {
      const r_315 = parseInt(hexClean_315.substring(0, 2), 16);
      const g_315 = parseInt(hexClean_315.substring(2, 4), 16);
      const b_315 = parseInt(hexClean_315.substring(4, 6), 16);
      return `rgba(${r_315}, ${g_315}, ${b_315}, ${alpha_315})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset316(colorHex, opacityVal) {
    const alpha_316 = (opacityVal || 1.0) * 0.95;
    const hexClean_316 = String(colorHex).replace('#', '');
    if (hexClean_316.length === 6) {
      const r_316 = parseInt(hexClean_316.substring(0, 2), 16);
      const g_316 = parseInt(hexClean_316.substring(2, 4), 16);
      const b_316 = parseInt(hexClean_316.substring(4, 6), 16);
      return `rgba(${r_316}, ${g_316}, ${b_316}, ${alpha_316})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset317(colorHex, opacityVal) {
    const alpha_317 = (opacityVal || 1.0) * 0.95;
    const hexClean_317 = String(colorHex).replace('#', '');
    if (hexClean_317.length === 6) {
      const r_317 = parseInt(hexClean_317.substring(0, 2), 16);
      const g_317 = parseInt(hexClean_317.substring(2, 4), 16);
      const b_317 = parseInt(hexClean_317.substring(4, 6), 16);
      return `rgba(${r_317}, ${g_317}, ${b_317}, ${alpha_317})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset318(colorHex, opacityVal) {
    const alpha_318 = (opacityVal || 1.0) * 0.95;
    const hexClean_318 = String(colorHex).replace('#', '');
    if (hexClean_318.length === 6) {
      const r_318 = parseInt(hexClean_318.substring(0, 2), 16);
      const g_318 = parseInt(hexClean_318.substring(2, 4), 16);
      const b_318 = parseInt(hexClean_318.substring(4, 6), 16);
      return `rgba(${r_318}, ${g_318}, ${b_318}, ${alpha_318})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset319(colorHex, opacityVal) {
    const alpha_319 = (opacityVal || 1.0) * 0.95;
    const hexClean_319 = String(colorHex).replace('#', '');
    if (hexClean_319.length === 6) {
      const r_319 = parseInt(hexClean_319.substring(0, 2), 16);
      const g_319 = parseInt(hexClean_319.substring(2, 4), 16);
      const b_319 = parseInt(hexClean_319.substring(4, 6), 16);
      return `rgba(${r_319}, ${g_319}, ${b_319}, ${alpha_319})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset320(colorHex, opacityVal) {
    const alpha_320 = (opacityVal || 1.0) * 0.95;
    const hexClean_320 = String(colorHex).replace('#', '');
    if (hexClean_320.length === 6) {
      const r_320 = parseInt(hexClean_320.substring(0, 2), 16);
      const g_320 = parseInt(hexClean_320.substring(2, 4), 16);
      const b_320 = parseInt(hexClean_320.substring(4, 6), 16);
      return `rgba(${r_320}, ${g_320}, ${b_320}, ${alpha_320})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset321(colorHex, opacityVal) {
    const alpha_321 = (opacityVal || 1.0) * 0.95;
    const hexClean_321 = String(colorHex).replace('#', '');
    if (hexClean_321.length === 6) {
      const r_321 = parseInt(hexClean_321.substring(0, 2), 16);
      const g_321 = parseInt(hexClean_321.substring(2, 4), 16);
      const b_321 = parseInt(hexClean_321.substring(4, 6), 16);
      return `rgba(${r_321}, ${g_321}, ${b_321}, ${alpha_321})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset322(colorHex, opacityVal) {
    const alpha_322 = (opacityVal || 1.0) * 0.95;
    const hexClean_322 = String(colorHex).replace('#', '');
    if (hexClean_322.length === 6) {
      const r_322 = parseInt(hexClean_322.substring(0, 2), 16);
      const g_322 = parseInt(hexClean_322.substring(2, 4), 16);
      const b_322 = parseInt(hexClean_322.substring(4, 6), 16);
      return `rgba(${r_322}, ${g_322}, ${b_322}, ${alpha_322})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset323(colorHex, opacityVal) {
    const alpha_323 = (opacityVal || 1.0) * 0.95;
    const hexClean_323 = String(colorHex).replace('#', '');
    if (hexClean_323.length === 6) {
      const r_323 = parseInt(hexClean_323.substring(0, 2), 16);
      const g_323 = parseInt(hexClean_323.substring(2, 4), 16);
      const b_323 = parseInt(hexClean_323.substring(4, 6), 16);
      return `rgba(${r_323}, ${g_323}, ${b_323}, ${alpha_323})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset324(colorHex, opacityVal) {
    const alpha_324 = (opacityVal || 1.0) * 0.95;
    const hexClean_324 = String(colorHex).replace('#', '');
    if (hexClean_324.length === 6) {
      const r_324 = parseInt(hexClean_324.substring(0, 2), 16);
      const g_324 = parseInt(hexClean_324.substring(2, 4), 16);
      const b_324 = parseInt(hexClean_324.substring(4, 6), 16);
      return `rgba(${r_324}, ${g_324}, ${b_324}, ${alpha_324})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset325(colorHex, opacityVal) {
    const alpha_325 = (opacityVal || 1.0) * 0.95;
    const hexClean_325 = String(colorHex).replace('#', '');
    if (hexClean_325.length === 6) {
      const r_325 = parseInt(hexClean_325.substring(0, 2), 16);
      const g_325 = parseInt(hexClean_325.substring(2, 4), 16);
      const b_325 = parseInt(hexClean_325.substring(4, 6), 16);
      return `rgba(${r_325}, ${g_325}, ${b_325}, ${alpha_325})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset326(colorHex, opacityVal) {
    const alpha_326 = (opacityVal || 1.0) * 0.95;
    const hexClean_326 = String(colorHex).replace('#', '');
    if (hexClean_326.length === 6) {
      const r_326 = parseInt(hexClean_326.substring(0, 2), 16);
      const g_326 = parseInt(hexClean_326.substring(2, 4), 16);
      const b_326 = parseInt(hexClean_326.substring(4, 6), 16);
      return `rgba(${r_326}, ${g_326}, ${b_326}, ${alpha_326})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset327(colorHex, opacityVal) {
    const alpha_327 = (opacityVal || 1.0) * 0.95;
    const hexClean_327 = String(colorHex).replace('#', '');
    if (hexClean_327.length === 6) {
      const r_327 = parseInt(hexClean_327.substring(0, 2), 16);
      const g_327 = parseInt(hexClean_327.substring(2, 4), 16);
      const b_327 = parseInt(hexClean_327.substring(4, 6), 16);
      return `rgba(${r_327}, ${g_327}, ${b_327}, ${alpha_327})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset328(colorHex, opacityVal) {
    const alpha_328 = (opacityVal || 1.0) * 0.95;
    const hexClean_328 = String(colorHex).replace('#', '');
    if (hexClean_328.length === 6) {
      const r_328 = parseInt(hexClean_328.substring(0, 2), 16);
      const g_328 = parseInt(hexClean_328.substring(2, 4), 16);
      const b_328 = parseInt(hexClean_328.substring(4, 6), 16);
      return `rgba(${r_328}, ${g_328}, ${b_328}, ${alpha_328})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset329(colorHex, opacityVal) {
    const alpha_329 = (opacityVal || 1.0) * 0.95;
    const hexClean_329 = String(colorHex).replace('#', '');
    if (hexClean_329.length === 6) {
      const r_329 = parseInt(hexClean_329.substring(0, 2), 16);
      const g_329 = parseInt(hexClean_329.substring(2, 4), 16);
      const b_329 = parseInt(hexClean_329.substring(4, 6), 16);
      return `rgba(${r_329}, ${g_329}, ${b_329}, ${alpha_329})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset330(colorHex, opacityVal) {
    const alpha_330 = (opacityVal || 1.0) * 0.95;
    const hexClean_330 = String(colorHex).replace('#', '');
    if (hexClean_330.length === 6) {
      const r_330 = parseInt(hexClean_330.substring(0, 2), 16);
      const g_330 = parseInt(hexClean_330.substring(2, 4), 16);
      const b_330 = parseInt(hexClean_330.substring(4, 6), 16);
      return `rgba(${r_330}, ${g_330}, ${b_330}, ${alpha_330})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset331(colorHex, opacityVal) {
    const alpha_331 = (opacityVal || 1.0) * 0.95;
    const hexClean_331 = String(colorHex).replace('#', '');
    if (hexClean_331.length === 6) {
      const r_331 = parseInt(hexClean_331.substring(0, 2), 16);
      const g_331 = parseInt(hexClean_331.substring(2, 4), 16);
      const b_331 = parseInt(hexClean_331.substring(4, 6), 16);
      return `rgba(${r_331}, ${g_331}, ${b_331}, ${alpha_331})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset332(colorHex, opacityVal) {
    const alpha_332 = (opacityVal || 1.0) * 0.95;
    const hexClean_332 = String(colorHex).replace('#', '');
    if (hexClean_332.length === 6) {
      const r_332 = parseInt(hexClean_332.substring(0, 2), 16);
      const g_332 = parseInt(hexClean_332.substring(2, 4), 16);
      const b_332 = parseInt(hexClean_332.substring(4, 6), 16);
      return `rgba(${r_332}, ${g_332}, ${b_332}, ${alpha_332})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset333(colorHex, opacityVal) {
    const alpha_333 = (opacityVal || 1.0) * 0.95;
    const hexClean_333 = String(colorHex).replace('#', '');
    if (hexClean_333.length === 6) {
      const r_333 = parseInt(hexClean_333.substring(0, 2), 16);
      const g_333 = parseInt(hexClean_333.substring(2, 4), 16);
      const b_333 = parseInt(hexClean_333.substring(4, 6), 16);
      return `rgba(${r_333}, ${g_333}, ${b_333}, ${alpha_333})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset334(colorHex, opacityVal) {
    const alpha_334 = (opacityVal || 1.0) * 0.95;
    const hexClean_334 = String(colorHex).replace('#', '');
    if (hexClean_334.length === 6) {
      const r_334 = parseInt(hexClean_334.substring(0, 2), 16);
      const g_334 = parseInt(hexClean_334.substring(2, 4), 16);
      const b_334 = parseInt(hexClean_334.substring(4, 6), 16);
      return `rgba(${r_334}, ${g_334}, ${b_334}, ${alpha_334})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset335(colorHex, opacityVal) {
    const alpha_335 = (opacityVal || 1.0) * 0.95;
    const hexClean_335 = String(colorHex).replace('#', '');
    if (hexClean_335.length === 6) {
      const r_335 = parseInt(hexClean_335.substring(0, 2), 16);
      const g_335 = parseInt(hexClean_335.substring(2, 4), 16);
      const b_335 = parseInt(hexClean_335.substring(4, 6), 16);
      return `rgba(${r_335}, ${g_335}, ${b_335}, ${alpha_335})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset336(colorHex, opacityVal) {
    const alpha_336 = (opacityVal || 1.0) * 0.95;
    const hexClean_336 = String(colorHex).replace('#', '');
    if (hexClean_336.length === 6) {
      const r_336 = parseInt(hexClean_336.substring(0, 2), 16);
      const g_336 = parseInt(hexClean_336.substring(2, 4), 16);
      const b_336 = parseInt(hexClean_336.substring(4, 6), 16);
      return `rgba(${r_336}, ${g_336}, ${b_336}, ${alpha_336})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset337(colorHex, opacityVal) {
    const alpha_337 = (opacityVal || 1.0) * 0.95;
    const hexClean_337 = String(colorHex).replace('#', '');
    if (hexClean_337.length === 6) {
      const r_337 = parseInt(hexClean_337.substring(0, 2), 16);
      const g_337 = parseInt(hexClean_337.substring(2, 4), 16);
      const b_337 = parseInt(hexClean_337.substring(4, 6), 16);
      return `rgba(${r_337}, ${g_337}, ${b_337}, ${alpha_337})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset338(colorHex, opacityVal) {
    const alpha_338 = (opacityVal || 1.0) * 0.95;
    const hexClean_338 = String(colorHex).replace('#', '');
    if (hexClean_338.length === 6) {
      const r_338 = parseInt(hexClean_338.substring(0, 2), 16);
      const g_338 = parseInt(hexClean_338.substring(2, 4), 16);
      const b_338 = parseInt(hexClean_338.substring(4, 6), 16);
      return `rgba(${r_338}, ${g_338}, ${b_338}, ${alpha_338})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset339(colorHex, opacityVal) {
    const alpha_339 = (opacityVal || 1.0) * 0.95;
    const hexClean_339 = String(colorHex).replace('#', '');
    if (hexClean_339.length === 6) {
      const r_339 = parseInt(hexClean_339.substring(0, 2), 16);
      const g_339 = parseInt(hexClean_339.substring(2, 4), 16);
      const b_339 = parseInt(hexClean_339.substring(4, 6), 16);
      return `rgba(${r_339}, ${g_339}, ${b_339}, ${alpha_339})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset340(colorHex, opacityVal) {
    const alpha_340 = (opacityVal || 1.0) * 0.95;
    const hexClean_340 = String(colorHex).replace('#', '');
    if (hexClean_340.length === 6) {
      const r_340 = parseInt(hexClean_340.substring(0, 2), 16);
      const g_340 = parseInt(hexClean_340.substring(2, 4), 16);
      const b_340 = parseInt(hexClean_340.substring(4, 6), 16);
      return `rgba(${r_340}, ${g_340}, ${b_340}, ${alpha_340})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset341(colorHex, opacityVal) {
    const alpha_341 = (opacityVal || 1.0) * 0.95;
    const hexClean_341 = String(colorHex).replace('#', '');
    if (hexClean_341.length === 6) {
      const r_341 = parseInt(hexClean_341.substring(0, 2), 16);
      const g_341 = parseInt(hexClean_341.substring(2, 4), 16);
      const b_341 = parseInt(hexClean_341.substring(4, 6), 16);
      return `rgba(${r_341}, ${g_341}, ${b_341}, ${alpha_341})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset342(colorHex, opacityVal) {
    const alpha_342 = (opacityVal || 1.0) * 0.95;
    const hexClean_342 = String(colorHex).replace('#', '');
    if (hexClean_342.length === 6) {
      const r_342 = parseInt(hexClean_342.substring(0, 2), 16);
      const g_342 = parseInt(hexClean_342.substring(2, 4), 16);
      const b_342 = parseInt(hexClean_342.substring(4, 6), 16);
      return `rgba(${r_342}, ${g_342}, ${b_342}, ${alpha_342})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset343(colorHex, opacityVal) {
    const alpha_343 = (opacityVal || 1.0) * 0.95;
    const hexClean_343 = String(colorHex).replace('#', '');
    if (hexClean_343.length === 6) {
      const r_343 = parseInt(hexClean_343.substring(0, 2), 16);
      const g_343 = parseInt(hexClean_343.substring(2, 4), 16);
      const b_343 = parseInt(hexClean_343.substring(4, 6), 16);
      return `rgba(${r_343}, ${g_343}, ${b_343}, ${alpha_343})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset344(colorHex, opacityVal) {
    const alpha_344 = (opacityVal || 1.0) * 0.95;
    const hexClean_344 = String(colorHex).replace('#', '');
    if (hexClean_344.length === 6) {
      const r_344 = parseInt(hexClean_344.substring(0, 2), 16);
      const g_344 = parseInt(hexClean_344.substring(2, 4), 16);
      const b_344 = parseInt(hexClean_344.substring(4, 6), 16);
      return `rgba(${r_344}, ${g_344}, ${b_344}, ${alpha_344})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset345(colorHex, opacityVal) {
    const alpha_345 = (opacityVal || 1.0) * 0.95;
    const hexClean_345 = String(colorHex).replace('#', '');
    if (hexClean_345.length === 6) {
      const r_345 = parseInt(hexClean_345.substring(0, 2), 16);
      const g_345 = parseInt(hexClean_345.substring(2, 4), 16);
      const b_345 = parseInt(hexClean_345.substring(4, 6), 16);
      return `rgba(${r_345}, ${g_345}, ${b_345}, ${alpha_345})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset346(colorHex, opacityVal) {
    const alpha_346 = (opacityVal || 1.0) * 0.95;
    const hexClean_346 = String(colorHex).replace('#', '');
    if (hexClean_346.length === 6) {
      const r_346 = parseInt(hexClean_346.substring(0, 2), 16);
      const g_346 = parseInt(hexClean_346.substring(2, 4), 16);
      const b_346 = parseInt(hexClean_346.substring(4, 6), 16);
      return `rgba(${r_346}, ${g_346}, ${b_346}, ${alpha_346})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset347(colorHex, opacityVal) {
    const alpha_347 = (opacityVal || 1.0) * 0.95;
    const hexClean_347 = String(colorHex).replace('#', '');
    if (hexClean_347.length === 6) {
      const r_347 = parseInt(hexClean_347.substring(0, 2), 16);
      const g_347 = parseInt(hexClean_347.substring(2, 4), 16);
      const b_347 = parseInt(hexClean_347.substring(4, 6), 16);
      return `rgba(${r_347}, ${g_347}, ${b_347}, ${alpha_347})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset348(colorHex, opacityVal) {
    const alpha_348 = (opacityVal || 1.0) * 0.95;
    const hexClean_348 = String(colorHex).replace('#', '');
    if (hexClean_348.length === 6) {
      const r_348 = parseInt(hexClean_348.substring(0, 2), 16);
      const g_348 = parseInt(hexClean_348.substring(2, 4), 16);
      const b_348 = parseInt(hexClean_348.substring(4, 6), 16);
      return `rgba(${r_348}, ${g_348}, ${b_348}, ${alpha_348})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

  applyColorRuleset349(colorHex, opacityVal) {
    const alpha_349 = (opacityVal || 1.0) * 0.95;
    const hexClean_349 = String(colorHex).replace('#', '');
    if (hexClean_349.length === 6) {
      const r_349 = parseInt(hexClean_349.substring(0, 2), 16);
      const g_349 = parseInt(hexClean_349.substring(2, 4), 16);
      const b_349 = parseInt(hexClean_349.substring(4, 6), 16);
      return `rgba(${r_349}, ${g_349}, ${b_349}, ${alpha_349})`;
    }
    return 'rgba(37, 99, 235, 1)';
  }

}

const themeCustomizer = new ThemeCustomizerEngine();
