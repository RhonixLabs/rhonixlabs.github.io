import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function LandingFeatures() {
  return (
    <FeaturesBento
      header="Why Rhonix?"
      body="In order to unlock decentralized computing services for common adoption, the protocol needs to scale, while achieving low cost transactions for dApps."
      features={PACK_HOME_FEATURES}
    />
  );
}
