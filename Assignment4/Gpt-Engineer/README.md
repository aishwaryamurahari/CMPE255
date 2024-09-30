## Download GPT Engineer
- (git clone)[https://github.com/AntonOsika/gpt-engineer.git]
## Set Up Python Environment
```
cd gpt-engineer
pip install -e .
```
## If you are using a virtual environment, consider this method:
```
make install && source venv/bin/activate
```

## Set Up GPT Engineer
```
python setup.py develop
```

## Verify the Installation
```
gpt-engineer --help
```

## Run GPT Engineer Projects in VSCode
- To run a GPT Engineer project in VSCode, follow these additional steps:

## Open the Specific Directory in VS Code

- Open the GPT-Engineer directory in your preferred code editor, such as Visual Studio Code (VS Code).

## Define the Project

- Inside the GPT-Engineer directory, locate the "example" directory and open the main prompt file. This is where you will describe the type of project you want GPT Engineer to generate. You can be as specific as you want, providing details and prompts for the code generation.

## Get the OpenAI API Key

- Sign up for an OpenAI account and create an API key.
- In the terminal or command prompt, type the following command to set the API key as an environment variable:
```
export OPENAI_API_KEY=your_api_key
```

## Run the Main File

- In the terminal or command prompt, navigate to the GPT-Engineer directory.
- Run the following command to execute the main file, specifying the folder containing the main prompt:
```
python main.py example
```

Note: Replace "example" with the name of the folder that contains your main prompt file.
After running the main file, GPT Engineer will prompt you for any areas of clarification or additional details you want to provide. You can provide as much information as needed. GPT Engineer will then start generating the code based on your prompts and specifications.

## Youtube link about the project
- [Link to Youtube](https://youtu.be/1zBOuXgqJuA)