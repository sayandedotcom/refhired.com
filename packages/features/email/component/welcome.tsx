"use client";

// import {
//   Body,
//   Button,
//   Container,
//   Head,
//   Heading,
//   Html,
//   Preview,
//   Section,
//   Tailwind,
//   Text,
// } from "@react-email/components";
// interface WelcomeEmailProps {
//   name: string | null | undefined;
// }
// export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
//   const previewText = `Welcome to Papermark, ${name}!`;
//   return (
//     <Html>
//       <Head />
//       <Preview>{previewText}</Preview>
//       <Tailwind>
//         <Body className="mx-auto my-auto bg-white font-sans">
//           <Container className="mx-auto my-10 w-[465px] p-5">
//             <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal">
//               Welcome to Papermark!
//             </Heading>
//             <Text className="text-sm">Hello {name},</Text>
//             <Text className="text-sm">
//               We're excited to have you onboard at <span>Papermark</span>. We hope you enjoy your journey with
//               us. If you have any questions or need assistance, feel free to reach out.
//             </Text>
//             <Section className="mb-[32px] mt-[32px] text-center">
//               <Button
//                 pX={20}
//                 pY={12}
//                 className="rounded bg-[#00A3FF] text-center text-xs font-semibold text-white no-underline"
//                 href={`${process.env.NEXTAUTH_URL}/welcome`}>
//                 Get Started
//               </Button>
//             </Section>
//             <Text className="text-sm">
//               Cheers,
//               <br />
//               The Papermark Team
//             </Text>
//           </Container>
//         </Body>
//       </Tailwind>
//     </Html>
//   );
// };
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

// import { siteConfig } from "@/config";

interface WelcomeTempProps {
  userName: string;
}

export const WelcomeTemp: React.FC<Readonly<WelcomeTempProps>> = ({ userName }) => (
  <Html>
    <Head />
    {/* <Preview>Welcome to {siteConfig.name}.</Preview> */}
    <Tailwind>
      <Body className="bg-white">
        <Container className="mx-auto py-20">
          <Section className="mx-auto text-center">
            <Row>
              <Column align="right">
                {/* <Img
                  src={`${siteConfig.url}/chad-next.png`}
                  height="50"
                  alt="ChadNext logo"
                  className="inline-block "
                /> */}
              </Column>
              <Column align="left">
                <Text className="ml-2 text-lg font-bold">ChadNext</Text>
              </Column>
            </Row>
          </Section>
          <Text className="my-4 text-base leading-6">Hi {userName},</Text>
          <Text className="text-base leading-6">
            Welcome to
            {/* {siteConfig.name}. {siteConfig.description} */}
          </Text>
          <Section className="mt-8 text-center">
            <Button
              className="bg-bg-white inline-block rounded-md bg-slate-900 px-6 py-3 text-base text-gray-100"
              href="https://github.com/moinulmoin/chadnext">
              Star on GitHub
            </Button>
          </Section>
          <Text className="mt-8 text-base leading-6">
            Best,
            <br />
            {/* {siteConfig.name}  */}
            team
          </Text>
          <Hr className="my-6 border-gray-300" />
          <Text className="text-x text-gray-600">
            Developed by <Link href="https://twitter.com/immoinulmoin">Moinul Moin</Link>
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
