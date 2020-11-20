import Link from 'next/link';
import { Container, Flex, Text, Image, Box, Grid } from 'theme-ui';
// import Image from 'next/image';

export default function Footer() {
  return (
    <Container
      as="footer"
      sx={{
        zIndex: 1,
        paddingBottom: 0,
      }}
    >
      <Grid
        as="section"
        gap={3}
        sx={{
          gridTemplateColumns: ['1fr'],
          backgroundColor: 'dark',
          clipPath: 'polygon(0% 8%,100% 0%,100% 100%,0% 100%)',
          minHeight: '300px',
          p: [3, 4],
          color: '#fff',
        }}
      >
        <Flex as="div" sx={{ marginTop: [3, 4] }}>
          <Box>
            <Image
              src="/images/logo-selectam-inverted.svg"
              alt="Logo SelectAM"
              sx={{ height: ['24px', '32px'], maxWidth: ['200px', '260px'] }}
            />
            <br />
            <Text sx={{ fontSize: [1], marginTop: [2, 3] }}>
              © {new Date().getFullYear()} SelectAM Oy
              <br />
              VAT: FI31626479
            </Text>
          </Box>
        </Flex>
      </Grid>
    </Container>
  );
}
