import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	preview: {
		port: 3000
	},
  server: {
		port: 3000,
		host: '0.0.0.0',
		hmr: true,
		watch: {
			usePooling: true
		},
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
				changeOrigin: true,
				secure: false,      
        ws: true,
      },
    },
  },

  plugins: [react()],
});
