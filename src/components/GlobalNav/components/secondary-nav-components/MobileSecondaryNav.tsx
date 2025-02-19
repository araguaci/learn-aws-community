import { Flex, Button, Icon, Text } from "@aws-amplify/ui-react";
import styles from "../../GlobalNav.module.scss";
import { ChevronIcon } from "../icons";

interface MobileSecondaryNavProps {
  secondaryNavMobile: JSX.Element;
  setShowGlobalNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileSecondaryNav({
  secondaryNavMobile,
  setShowGlobalNav,
}: MobileSecondaryNavProps) {
  return (
    <Flex
      className={styles["secondary-nav-mobile"]}
      position="absolute"
      direction="column"
      width="100%"
      rowGap="0px"
    >
      <Button
        onClick={() => setShowGlobalNav(true)}
        justifyContent="flex-start"
        fontWeight="400"
        padding="12px"
        alignItems="center"
        borderRadius="0px"
        columnGap="9px"
        fontSize="0.875rem"
        className={`${styles["secondary-nav-button"]}`}
        ariaLabel={`Back to all Amplify sites`}
      >
        <ChevronIcon rotateDeg="90" />
        <Text>All Amplify sites</Text>
      </Button>
      {secondaryNavMobile}
    </Flex>
  );
}
