import { PrimaryLabel, PrimaryPaint, SecondaryLabel, SecondaryPaint } from "./styled";

type BannerProps = {
  text: string
}

export const PrimaryBanner = ({ text }: BannerProps) => (
  <PrimaryPaint>
    <PrimaryLabel>
      {text}
    </PrimaryLabel>
  </PrimaryPaint>
)

export const SecondaryBanner = ({ text }: BannerProps) => (
  <SecondaryPaint>
    <SecondaryLabel>
      {text}
    </SecondaryLabel>
  </SecondaryPaint>
)
