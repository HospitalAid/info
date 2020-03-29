<template>
  <svg id="radar"></svg>
</template>

<script>
export default {
  name: "HospitalAid Radar",
  mounted() {
    var LANGUAGE = 0;
    var PLATFORM = 1;
    var TECHNIQUES = 2;
    var TOOLS = 3;
    var ADOPT = 0;
    var TRIAL = 1;
    var ASSESS = 2;
    var HOLD = 3;

    radar_visualization({
      svg_id: "radar",
      width: 1450,
      height: 1000,
      colors: {
        background: "#fff",
        grid: "#bbb",
        inactive: "#ddd"
      },
      title: "HospitalAid Tech Radar",
      quadrants: [
        { name: "Languages & Frameworks" },
        { name: "Platform" },
        { name: "Techniques" },
        { name: "Tools" }
      ],
      rings: [
        { name: "ADOPT", color: "#93c47d" },
        { name: "TRIAL", color: "#93d2c2" },
        { name: "ASSESS", color: "#fbdb84" },
        { name: "HOLD", color: "#efafa9" }
      ],
      print_layout: true,
      entries: [
        {
          label: "TypeScript",
          quadrant: 0, // 0,1,2,3 (counting clockwise, starting from bottom right)
          ring: 0, // 0,1,2,3 (starting from inside)
          moved: 0 // -1 = moved out (triangle pointing down)
          //  0 = not moved (circle)
          //  1 = moved in  (triangle pointing up)
        },
        {
          label: "Vue.js (2)",
          quadrant: LANGUAGE,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Nuxt.js",
          quadrant: LANGUAGE,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "OpenAPI (Swagger)",
          quadrant: LANGUAGE,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "VuePress",
          quadrant: TOOLS,
          ring: TRIAL,
          moved: 1
        },
        {
          label: "AWS CDK",
          quadrant: TOOLS,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Kubernetes",
          quadrant: PLATFORM,
          ring: HOLD,
          moved: 0
        },
        {
          label: "AWS DynamoDB",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "AWS Lambda",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "AWS Step Functions",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "AWS Kinesis Stream",
          quadrant: PLATFORM,
          ring: TRIAL,
          moved: 0
        },
        {
          label: "AWS Kinesis Data Analytics",
          quadrant: PLATFORM,
          ring: ASSESS,
          moved: 0
        },
        {
          label: "Amazon Athena",
          quadrant: PLATFORM,
          ring: ASSESS,
          moved: 0
        },
        {
          label: "AWS Glue",
          quadrant: PLATFORM,
          ring: ASSESS,
          moved: 0
        },
        {
          label: "AWS S3",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "AWS API Gateway",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Auth0",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Algolia",
          quadrant: PLATFORM,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "puppeteer",
          quadrant: TOOLS,
          ring: TRIAL,
          moved: 0
        },
        {
          label: "jest",
          quadrant: TOOLS,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "lerna",
          quadrant: TOOLS,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Monorepo",
          quadrant: TECHNIQUES,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Serverless Architecture",
          quadrant: TECHNIQUES,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "JAMstack",
          quadrant: TECHNIQUES,
          ring: ADOPT,
          moved: 0
        },
        {
          label: "Lambda Pinball",
          quadrant: TECHNIQUES,
          ring: HOLD,
          moved: 0
        }
      ]
    });
  }
};
</script>

<style lang="scss" scoped></style>
