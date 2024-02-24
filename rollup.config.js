import json from '@rollup/plugin-json';

export default {
    plugins: [
        json({
          compact: true,
          include: 'static/transcript.json',
        }),
    ],
};