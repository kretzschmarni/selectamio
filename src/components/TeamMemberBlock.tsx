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

// props: { color?: string }, children

const TeamMemberBlock = ({ children, ...props }: any) => {
  const { imagePath, name, title } = props;
  return (
    <Flex sx={{ p: [2, 3], alignItems: 'center' }}>
      <Image
        src={imagePath}
        sx={{
          height: ['64px', '96px'],
          width: ['64px', '96px'],
          borderRadius: ['32px', '48px'],
          marginRight: [2, 3],
          flexShrink: 0,
        }}
      />
      <Box>
        <Heading as="h4">{name}</Heading>
        <Text sx={{ fontSize: [2], marginBottom: [1, 2] }}>{title}</Text>
        {/* <Text sx={{ fontSize: [1] }}>{children}</Text> */}
      </Box>
    </Flex>
  );
};

export default TeamMemberBlock;
