const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook build',                // build HTML in _book
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'git add . ',
      'git ci -am "new version"', // commit changes
      //'git push --force origin master' // push changes to gitbook repo
      'git push origin master' // push changes to gitbook repo
    ]
  )
);

gulp.task('ghrepo', shell.task( // Open a browser in the github book repo
  'hub browse etsiiull/gitbook-skeleton'
));

gulp.task('apuntes', shell.task( // Open web browser in the github deployment of this book
  'open https://etsiiull.github.io/gitbook-skeleton'
));

gulp.task("pre-install", shell.task([ // global dependencies
      "npm i -g gitbook-cli",
			"brew install hub"
]));

gulp.task("push", shell.task([ // push to github not to gitbook
      'git ci -am "new version" && git push origin master',
]));

gulp.task('serve', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook serve',                // build HTML in _book
      ],
      { verbose: true }
  )
);
