import { colors } from "./colors";
import { other } from "./theme";

export const createInputStyles = (overrides?: any) => {
  const stylesObj = {
    label: {
      color: colors.navy[9],
      fontWeight: 600,
      width: "100%",
      ...overrides?.label,
    },
    required: {
      color: colors.red[6],
      ...overrides?.required,
    },
    description: {
      color: `${colors.navy[9]} !important`,
      margin: ".2rem 0 .6rem",
      fontWeight: "400",
      ...overrides?.description,
    },
    input: {
      color: colors.navy[9],
      backgroundColor: colors.yellow[1],
      letterSpacing: ".06rem",
      "::placeholder": {
        color: `${colors.gray[3]} !important`,
        ...overrides?.input?.["::placeholder"],
      },
      "&:focus": {
        backgroundColor: other.colors.white,
        borderWidth: 1,
        ...overrides?.input?.["&:focus"],
      },
      "&:disabled": {
        backgroundColor: colors.yellow[0],
        borderColor: colors.gray[1],
        borderWidth: 2,
        ...overrides?.input?.["&:disabled"],
      },
      "&:invalid": {
        color: colors.red[6],
        borderColor: colors.red[6],
        ...overrides?.input?.["&:invalid"],
      },
      ...overrides?.input,
    },
    icon: { ...overrides?.icon },
    dropdown: { ...overrides?.dropdown },
    hovered: { ...overrides?.hovered },
    focused: { ...overrides?.focused },
    selected: { ...overrides?.selected },
    day: { ...overrides?.day },
    weekend: { ...overrides?.weekend },
    inRange: { ...overrides?.inRange },
    firstInRange: { ...overrides?.firstInRange },
    lastInRange: { ...overrides?.lastInRange },
  };

  return stylesObj;
};
