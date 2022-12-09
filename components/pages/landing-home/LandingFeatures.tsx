import { PACK_HOME_FEATURES } from "../../../content/features";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function LandingFeatures() {
  return (
    <FeaturesBento
      header="Why Rhonix?"
      body="One of the key missing points having decentralized computing for the masses, is to scale and achive low cost transactions for dApps."
      features={PACK_HOME_FEATURES}
    />
  );
}
