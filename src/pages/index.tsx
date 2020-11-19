import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Link,
  AspectRatio,
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
        <Flex sx={{ width: ['100%', '126%'], zIndex: 1, alignItems: 'center' }}>
          <Text sx={{ fontSize: [4, 5], fontWeight: 100, py: [3, 4] }}>
            We create a tool for part identification and redesigning to gain
            from the advantages of additive manufacturing.
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
      <Grid
        as="section"
        gap={3}
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
          background: '#fff',
          clipPath: 'polygon(0% 6%,100% 0%,100% 100%,0% 97%)',
          marginTop: -5,
          zIndex: 2,
          py: [4, 5],
          px: [3, 4],
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
          Part identification considering a components’ supply chain, technical,
          economic, and (re)design potential.
        </FeatureBlock>
        <FeatureBlock color="#ccc">
          We protect your data. On-premise installation for full offline
          functionality.
        </FeatureBlock>
      </Grid>
      <Grid
        as="section"
        gap={3}
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 2fr 1fr'],
          // marginTop: -5,
          zIndex: 0,
          py: [4, 5],
          px: [3, 4],
        }}
      >
        <Box></Box>
        <Box>
          <Text sx={{ fontSize: [2, 3], fontWeight: 100, py: [3, 4] }}>
            We have been developing a part identification and redesigning
            software tool to gain from the advantages of additive manufacturing
            (AM) processes. This development supports companies to manage the
            transition to AM in a simplistic, fast, holistic, and accurate
            manner. Improving companies’ manufacturing capabilities in a
            sustainable and economic way.
          </Text>
        </Box>
      </Grid>
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
          }}
        >
          Founded in 2020 in Helsinki with an international team of experienced
          AM experts, software developers, and business specialists.
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
          marginTop: -2,
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          marginBottom: -5,
          zIndex: 0,
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
            zIndex: 0,
            minHeight: '400px',
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
            sx={{ maxWidth: ['100%', '80%', '50%'], px: [4, 0], py: [2, 0] }}
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
              We would love to hear from you!
            </Text>
            <Grid
              gap={3}
              sx={{
                gridTemplateColumns: ['1fr', '1fr 1fr'],
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
                +358 45 8980609
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
