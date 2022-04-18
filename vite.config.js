import path from 'path'
import { createVitePlugins } from './build/vite/plugin/index'

const pathSrc = path.resolve(__dirname, 'src')

export default ({ command }) => {

	const isBuild = command === 'build';

	return {
		plugins: createVitePlugins(isBuild),
		resolve: {
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', 'css', 'scss'],
			alias: {
				'~': path.resolve(__dirname, './'),
				'@': path.resolve(__dirname, 'src')
			},
		},
		server: {
			host: '0.0.0.0',
			port: 1025
		},
		css: {
			postcss: {
				plugins: [
					{
						postcssPlugin: 'internal:charset-removal',
						AtRule: {
							charset: (atRule) => {
								if (atRule.name === 'charset') {
									atRule.remove()
								}
							}
						}
					}
				]
			}
		}
	}
}
