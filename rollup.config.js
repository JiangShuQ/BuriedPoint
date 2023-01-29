import path from 'path'
import ts from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

export default [
    {
        input: './src/core/index.ts',
        output: [
            {
                // 打包esModule
                file: path.resolve(__dirname, './dist/index.esm.js'),
                format: 'es'
            },
            {
                // 打包commonJs
                file: path.resolve(__dirname, './dist/index.cjs.js'),
                format: 'cjs'
            },
            {
                // 打包CMD AMD UMD
                file: path.resolve(__dirname, './dist/index.js'),
                format: 'umd',
                name: 'tracker'
            }
        ],
        plugins: [
            ts()
        ]
    },
    {
        input: './src/core/index.ts',
        output: {
            file: path.resolve(__dirname, './dist/index.d.ts'),
            format: 'es'
        },
        plugins: [
            dts()
        ]
    }
]