import { H1, H2, P, typographyVariants } from '@kittr/ui/new';
import Image from 'next/image';
import { generateKittrMetadata } from '@/app/generateKittrMetadata';
import { ContactButton } from '@/app/contact/ContactButton';

export const generateMetadata = () =>
  generateKittrMetadata({
    title: 'Contact Us',
    description: 'Want to get in touch?',
  });

const PROPERTIES = [
  {
    image: '/media/icons/discord.svg',
    imageAlt: 'Discord Icon',
    title: 'DISCORD',
    primaryText: 'JOIN SERVER',
    primaryLink: 'https://discord.gg/KWaPCU2d3S',
    secondaryText: 'MESSAGE #general',
    secondaryLink: 'https://discord.gg/KWaPCU2d3S',
  },
  {
    image: '/media/icons/twitter.svg',
    imageAlt: 'Twitter Icon',
    title: 'TWITTER',
    primaryText: 'FOLLOW US',
    primaryLink: 'https://twitter.com/kittrgg',
    secondaryText: 'SEND A DM',
    secondaryLink:
      'https://twitter.com/messages/compose?recipient_id=1419806137088577537',
  },
];

function Page() {
  return (
    <div className="flex flex-col gap-10">
      <H1>Contact us</H1>
      <P className="text-center">
        Having some trouble? Want to see a new feature? Just want to tell us you
        love us?
      </P>
      <div className="grid grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
        {PROPERTIES.map((property) => {
          return (
            <div
              className="flex w-[300px] flex-col items-center justify-between gap-6 p-8 text-center rounded-xl bg-zinc-800"
              key={property.title}
            >
              <Image
                alt={property.imageAlt}
                height={50}
                src={property.image}
                width={50}
              />
              <H2 className={typographyVariants({ presets: 'h3' })}>
                {property.title}
              </H2>
              <ContactButton
                link={property.primaryLink}
                text={property.primaryText}
              />
              <ContactButton
                link={property.secondaryLink}
                text={property.secondaryText}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
