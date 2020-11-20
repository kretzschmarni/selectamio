import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Link,
  AspectRatio,
  Button,
} from '@theme-ui/components';
import React from 'react';
import FeatureBlock from 'src/components/FeatureBlock';
import TeamMemberBlock from 'src/components/TeamMemberBlock';

// import { Image as NImage } from 'next/image';

const IndexPage = () => {
  return (
    <Box>
      <Grid
        as="section"
        gap={3}
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1.4fr'],
        }}
      >
        <Flex sx={{ width: ['100%', '132%'], zIndex: 1, alignItems: 'center' }}>
          <Text
            sx={{
              fontSize: [4, 5],
              fontWeight: 100,
              py: [3, 4],
              marginTop: [0, -4],
            }}
          >
            The complete part identification and re-designing solution for
            manufacturers looking to gain from the advantages of Additive
            Manufacturing.
          </Text>
        </Flex>
        <Flex
          sx={{
            backgroundColor: 'primaryLight',
            justifyContent: 'center',
            paddingTop: [4, 5],
            px: [2, 3],
            paddingBottom: [5, 6],
            zIndex: 0,
          }}
        >
          <Image
            src="/images/screen_costs.png"
            alt="Screenshot Desktop App SelectAM"
            sx={{
              maxHeight: '280px',
              position: 'relative',
              left: -4,
              transform: 'perspective(8cm) rotateY(-14deg)',
            }}
          />
        </Flex>
      </Grid>
      <Box
        as="section"
        sx={{
          background: '#fff',
          clipPath: 'polygon(0% 6%,100% 0%,100% 100%,0% 97%)',
          marginTop: -5,
          zIndex: 2,
          py: [4, 5],
          px: [3, 4],
        }}
      >
        <Heading as="h3">Partners:</Heading>
        <Flex sx={{ justifyContent: 'space-around', marginBottom: [3, 4] }}>
          <Image
            src="/images/logo-aalto.png"
            alt="Logo Aalto"
            sx={{
              height: '32px',
            }}
          />
          <Image
            src="/images/logo_bc-main.inline.svg"
            alt="Logo booncon"
            sx={{
              height: '36px',
            }}
          />
          <Image
            src="/images/logo-eit.jpg"
            alt="Logo Aalto"
            sx={{
              height: '36px',
            }}
          />
          <Image
            src="/images/logo-torggler.png"
            alt="Logo Torggler"
            sx={{
              height: '36px',
            }}
          />
        </Flex>
        <Text
          sx={{
            marginTop: [2, 3],
            marginBottom: [3, 4],
            fontSize: [2, 3],
          }}
        >
          Today’s switch from prototyping to end-use products in additive
          manufacturing Increased competitiveness of AM technologies in recent
          years Gain from manufacturing flexibility, design opportunities, and
          cost cuts Encompass the complexity of AM processes and applications
          High levels of accuracy and user experience. Here are some of our key
          benefits:
        </Text>
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
          }}
        >
          <FeatureBlock color="#ccc">
            Up-to-date database of relevant end-use AM machines, materials, and
            manufacturing capabilities.
          </FeatureBlock>
          <FeatureBlock color="#ccc">
            Top-down (large data qualities) and bottom-up (single data points)
            part identification.
          </FeatureBlock>
          <FeatureBlock color="#ccc">
            Simulation of all industrially relevant direct and indirect AM
            processes including post-processing steps with enhanced machine
            learning.
          </FeatureBlock>
          <FeatureBlock color="#ccc">
            Full 3D models analysis with nesting visualisation. Cost & pricing
            simulation even possible without a model.
          </FeatureBlock>
          <FeatureBlock color="#ccc">
            Part identification considering a components’ supply chain,
            technical, economic, and (re)design potential.
          </FeatureBlock>
          <FeatureBlock color="#ccc">
            Your data is yours. Option for on-premise installation with full
            offline functionality and no problems with export regulations.
          </FeatureBlock>
        </Grid>
      </Box>
      <Box
        as="section"
        sx={{
          zIndex: 0,
          py: [4, 5],
          px: [3, 4],
        }}
      >
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 2fr 1fr'],
          }}
        >
          <Box></Box>
          <Box sx={{ position: 'relative' }}>
            <Image
              src="/images/lattice-cube.png"
              alt="Screenshot Desktop App SelectAM"
              sx={{
                maxHeight: '56px',
                position: 'absolute',
                left: '-78px',
                mixBlendMode: 'color-burn',
              }}
            />
            <Text sx={{ fontSize: [2, 3], fontWeight: 100, py: [3, 4] }}>
              We have been working on this tool since the end of 2018, starting
              with the analysis of supply chain management data. After two years
              of development we started testing our Windows application in 2020
              with selected companies and continuously added new features and
              improvements.
              <br />
              Before the public release of our On-Prem software we are looking
              to further refine our algorithms and polish the last edges. If you
              are interested in early-access we are looking for pilot projects
              with a handful of manufacturers. You would gain access to our tool
              within your premises and we help you prepare and assess data for
              AM part identification.
            </Text>
            <Flex sx={{ justifyContent: 'space-between' }}>
              <Image
                src="/images/screen-amexp.png"
                alt="Screenshot Desktop App SelectAM"
                sx={{
                  maxHeight: '120px',
                  position: 'relative',
                  transform: 'perspective(8cm) rotateY(-14deg)',
                }}
              />
              <Image
                src="/images/screen-nest.png"
                alt="Screenshot Desktop App SelectAM"
                sx={{
                  maxHeight: '120px',
                  position: 'relative',
                  transform: 'perspective(8cm) rotateY(-14deg)',
                }}
              />
              <Image
                src="/images/screen-scm.png"
                alt="Screenshot Desktop App SelectAM"
                sx={{
                  maxHeight: '120px',
                  position: 'relative',
                  transform: 'perspective(8cm) rotateY(-14deg)',
                }}
              />
            </Flex>
            <Text sx={{ fontSize: [2, 3], fontWeight: 100, py: [3, 4] }}>
              If you are interested please let us know, we are looking forward
              to hearing from you.
              {/* This means you will get access to
              use our tool within your premises and we help you to prepare and
              assess data for AM part identification. */}
              {/* we want to release our tool to the public we are looking to
              refine our algorithms even further and polish the last edges. */}
              {/* Therefore we are looking for pilot projects with interested
              manufacturing companies. This means you will get access to use our
              tool within your premises and we help you to prepare and assess
              data for AM part identification. */}
              {/* even further and make sure to The company was registered in
              November 2020. Today, we provide projects for manufacturing
              companies within Europe, in which we install our software on-site,
              . */}
            </Text>

            <Flex sx={{ justifyContent: 'space-around' }}>
              <Button ml="auto" sx={{ mx: 'auto', my: [2, 3] }}>
                Start a project with us
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Box>
      <Box
        as="section"
        sx={{
          background: '#fff',
          clipPath: 'polygon(0% 0%,100% 8%,100% 97%,0% 100%)',
          zIndex: 2,
          py: [4, 5],
          px: [3, 4],
        }}
      >
        <Heading as="h2">Team:</Heading>
        <Text
          sx={{
            marginTop: [2, 3],
            marginBottom: [3, 4],
            maxWidth: ['100%', '66.66%'],
            fontSize: [2, 3],
          }}
        >
          SelectAM was founded by an international team of experienced AM
          experts, software developers, and business specialists on a mission to
          make the avantages of AM accessible to all manufacturers.
        </Text>
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            marginTop: [2, 3],
          }}
        >
          <TeamMemberBlock
            name="Niklas Kretzschmar"
            title="CEO"
            imagePath="/images/niklas.png"
          >
            Up-to-date database of relevant end-use AM machines, materials, and
            manufacturing capabilities.
          </TeamMemberBlock>
          <TeamMemberBlock
            name="Lukas Jakob Hafner"
            title="CTO"
            imagePath="/images/luki.jpg"
          >
            Over ten years of working within the fields of technology and
            design.
          </TeamMemberBlock>
          <TeamMemberBlock
            name="Eero Huotilainen"
            title="Back-end Development"
            imagePath="/images/eero.jpeg"
          >
            Experience on computational modeling of surface meshes and data
            quantification.
          </TeamMemberBlock>
          <TeamMemberBlock
            name="Iñigo Flores Ituarte"
            title="AM Expert"
            imagePath="/images/inigo.jpg"
          >
            Digital manufacturing expert. Back-end and algorithm development for
            AM cost, manufacturing process chain, and predictive modelling
            features.
          </TeamMemberBlock>
          <TeamMemberBlock
            name="Tobias Johannes"
            title="Business Expert"
            imagePath="/images/tobi.jpg"
          >
            Degree in International Business and years of practical experience
            in the fields of change management and corporate restructuring.
          </TeamMemberBlock>
        </Grid>
        <Heading as="h3" sx={{ marginTop: [3, 4], marginBottom: [2, 3] }}>
          Advisory Board:
        </Heading>
        <Grid
          gap={3}
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
            marginTop: [2, 3],
          }}
        >
          <TeamMemberBlock
            name="Georg Bitarichvili"
            title="Business Advisor"
            imagePath="/images/georg.jpeg"
          >
            Up-to-date database of relevant end-use AM machines, materials, and
            manufacturing capabilities.
          </TeamMemberBlock>
          <TeamMemberBlock
            name="Ismo Mäkelä"
            title="Technical Advisor"
            imagePath="/images/ismo.jpeg"
          >
            Up-to-date database of relevant end-use AM machines, materials, and
            manufacturing capabilities.
          </TeamMemberBlock>
        </Grid>
      </Box>
      <Grid
        as="section"
        gap={3}
        sx={{
          marginTop: -4,
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          marginBottom: -5,
          zIndex: 0,
          backgroundColor: 'mutedLight',
        }}
      >
        <Flex
          sx={{
            background: 'url(/images/google-maps-static.png) 50% 50% no-repeat',
            backgroundSize: 'cover',
            justifyContent: 'center',
            paddingTop: [4, 5],
            px: [2, 3],
            paddingBottom: [5, 6],
            minHeight: '200px',
          }}
        ></Flex>
        <Flex
          sx={{
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Box
            sx={{ maxWidth: ['100%', '80%', '50%'], px: [4, 0], py: [2, 6] }}
          >
            <Heading
              as="h2"
              sx={{
                fontSize: [3, 4],
                fontFamily: 'body',
                textTransform: 'uppercase',
                marginBottom: [2, 3],
              }}
            >
              Get in touch.
            </Heading>
            <Text sx={{ fontSize: [2, 3], marginBottom: [2, 3] }}>
              Any questions or ideas? Our team is happy to serve you. You can
              reach us via the following:
            </Text>
            <Grid
              gap={3}
              sx={{
                gridTemplateColumns: ['1fr'],
                fontSize: [1, 2],
              }}
            >
              <address>
                SelectAM Oy
                <br />
                Suvilahdenkatu 4 B 42
                <br />
                c/o Hafner
                <br />
                00500 Helsinki, FI
              </address>
              <address>
                +358 50 3395945
                <br />
                <Link href="mailto:hi@selectam.io?subject=Hi SelectAM!">
                  hi@selectam.io
                </Link>
              </address>
            </Grid>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default IndexPage;
