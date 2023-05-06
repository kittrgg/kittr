import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
};

export const Defaults = () => (
  <div>
    <Title preset="d1">This is a test.</Title>
    <Title preset="d2">This is a test.</Title>
    <Title preset="h1">This is a test.</Title>
    <Title preset="h2">This is a test.</Title>
    <Title preset="h3">This is a test.</Title>
    <Title preset="h4">This is a test.</Title>
    <Title preset="h5">This is a test.</Title>
    <Title preset="h6">This is a test.</Title>
  </div>
);

export const H1StylesForAnH2 = () => (
  <Title preset="h1" order={2}>
    What a test.
  </Title>
);
