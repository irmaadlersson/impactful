/* eslint-disable no-console */
import fs from 'fs';
import kleur from 'kleur';

export const createMissingDotEnvFile = (destinationFile, exampleFile) => {
  fs.access(destinationFile, fs.constants.F_OK | fs.constants.R_OK, error => {
    if (error) {
      console.log(
        kleur.yellow(`No '${destinationFile}' config file found, trying to copy it from example...`)
      );

      // Node >= 8.5.0 only
      fs.copyFile(exampleFile, destinationFile, fs.constants.COPYFILE_EXCL, error => {
        if (error) {
          throw error;
        }

        console.log(kleur.green('Config file successfully copied!'));
        console.log(
          kleur.blue(
            `You will probably need to change the default parameters within '${destinationFile}'`
          )
        );
      });
    } else {
      console.log(
        kleur.green(`Config file '${destinationFile}' exists and is readable, we are good to go!`)
      );
    }
  });
};
