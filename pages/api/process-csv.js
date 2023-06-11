import { PythonShell } from 'python-shell';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    console.log(req.body)
    // const file = req.files.csvFile;

    // // Set the path to your Python script
    // const scriptPath = '../../scripts/model.py';

    // // Set the options for the Python shell
    // const options = {
    //   args: [file.path], // Pass the file path as an argument to the Python script
    // };

    // // Run the Python script
    // PythonShell.run(scriptPath, options, (err, result) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({ error: 'An error occurred' });
    //   }

    //   // Handle the result returned by the Python script
    //   console.log(result);

    //   // Return the result as a response
    //   return res.status(200).json({ result });
    // });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
}
