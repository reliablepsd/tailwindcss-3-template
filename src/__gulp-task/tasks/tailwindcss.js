import tailwindcss from "tailwindcss";
import gpostcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);


// tailwindcss build version project
export const tailwindcssBuild = () => {
	var postcssTailwindBuildPlugins = [
		tailwindcss('./tailwind.config.cjs')
	];
	return g.gulp.src(g.v.src.styleTailwindScss)
		.pipe(g.plumber({ errorHandler: g.notify.onError("Error: <%= error.message %>") }))
		.pipe(sass())
		.pipe(gpostcss(postcssTailwindBuildPlugins))
		.pipe(g.gulp.dest(g.v.build.style))
		.pipe(g.browserSync.reload({stream:true}))
}

// tailwindcss prod version project
export const tailwindcssProd = () => {
	var postcssTailwindProdPlugins = [
		tailwindcss('./tailwind.config.cjs'),
		autoprefixer()
	];
	return g.gulp.src(g.v.src.styleTailwindScss)
		.pipe(g.plumber({ errorHandler: g.notify.onError("Error: <%= error.message %>") }))
		.pipe(sass())
		.pipe(gpostcss(postcssTailwindProdPlugins))
		.pipe(g.gulp.dest(g.v.dist.style))
		.pipe(g.browserSync.reload({stream:true}))
}

// Old version for tailwind.css
// tailwindcss build version project
// export const tailwindcssBuild = () => {
// 	var postcssTailwindBuildPlugins = [
// 		tailwindcss('./tailwind.config.cjs')
// 	];
// 	return g.gulp.src(g.v.src.styleTailwind)
// 		.pipe(g.plumber({ errorHandler: g.notify.onError("Error: <%= error.message %>") }))
// 		.pipe(postcss(postcssTailwindBuildPlugins))
// 		.pipe(g.gulp.dest(g.v.build.style))
// 		.pipe(g.browserSync.reload({stream:true}))
// }

// // tailwindcss prod version project
// export const tailwindcssProd = () => {
// 	var postcssTailwindProdPlugins = [
// 		tailwindcss('./tailwind.config.cjs'),
// 		autoprefixer()
// 	];
// 	return g.gulp.src(g.v.src.styleTailwind)
// 		.pipe(g.plumber({ errorHandler: g.notify.onError("Error: <%= error.message %>") }))
// 		.pipe(postcss(postcssTailwindProdPlugins))
// 		.pipe(g.gulp.dest(g.v.dist.style))
// 		.pipe(g.browserSync.reload({stream:true}))
// }
