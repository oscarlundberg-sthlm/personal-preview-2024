import { Email, Github, LinkedIn } from "@/svg/socialIcons";
import SocialLink from "./SocialLink";

function SocialLinksVertical() {
  return (
    <div className="h-full grid grid-rows-3 gap-2 items-end pb-[calc(var(--heading-size)*0.31)]">
      <div className="min-w-max min-h-max relative">
        <SocialLink
          style="verticalOverlay"
          href="mailto:oscarlundberg@hotmail.com"
          ariaLabel="Send me an email"
          iconComponent={<Email className="h-auto w-5" fill="currentColor" />}
        />
      </div>
      <div className="min-w-max min-h-max relative">
        <SocialLink
          style="verticalOverlay"
          href="https://github.com/oscarlundberg-sthlm"
          ariaLabel="Visit my Github page"
          iconComponent={<Github className="h-auto w-5" fill="currentColor" />}
        />
      </div>
      <div className="min-w-max min-h-max relative">
        <SocialLink
          style="verticalOverlay"
          href="https://www.linkedin.com/in/oscarlundberg-sthlm"
          ariaLabel="Visit my Linkedin page"
          iconComponent={
            <LinkedIn className="h-auto w-5" fill="currentColor" />
          }
        />
      </div>
    </div>
  );
}

export default SocialLinksVertical;
