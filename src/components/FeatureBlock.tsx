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

const FeatureBlock = ({ children, ...props }: any) => {
  const { color } = props;
  return (
    <Flex sx={{ p: [2, 3], alignItems: 'center' }}>
      <Box
        sx={{
          height: ['64px', '96px', '128px'],
          width: ['64px', '96px', '128px'],
          backgroundColor: color !== undefined ? color : '#ccc',
          borderRadius: ['32px', '48px', '64px'],
          marginRight: [2, 3],
          flexShrink: 0,
        }}
      ></Box>
      <Text sx={{ fontSize: [2] }}>{children}</Text>
    </Flex>
  );
};

export default FeatureBlock;
