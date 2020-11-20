import {
  Flex,
  Grid,
  Box,
  Text,
  Heading,
  Image,
  Link,
  AspectImage,
} from '@theme-ui/components';

// props: { color?: string }, children

const FeatureBlock = ({ children, ...props }: any) => {
  const { color, imagePath } = props;
  return (
    <Flex sx={{ p: [2, 3], alignItems: 'center' }}>
      {imagePath ? (
        <AspectImage
          ratio={3 / 1}
          src={imagePath}
          sx={{
            // height: ['64px', '96px', '128px'],
            // // width: ['64px', '96px', '128px'],
            // borderRadius: ['32px', '48px', '64px'],
            marginRight: [2, 3],
            flexShrink: 0,
          }}
        />
      ) : (
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
      )}
      <Text sx={{ fontSize: [2] }}>{children}</Text>
    </Flex>
  );
};

export default FeatureBlock;
