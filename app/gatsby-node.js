exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /raf-manager/,
                        use: loaders.null(),
                    },
                    {
                        test: /particles-bg/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}
