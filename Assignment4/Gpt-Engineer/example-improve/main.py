import openai
import os
import sys

# Load API key from environment variables
from dotenv import load_dotenv
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def read_prompt(prompt_file):
    """Read the content of the prompt file."""
    with open(prompt_file, 'r') as file:
        return file.read()

def call_openai(prompt):
    """Sends a prompt to OpenAI and returns the generated response."""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # Updated model
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=1000,
        temperature=0.7
    )
    return response.choices[0].message['content']


# def create_project_files(output_dir, generated_code):
#     """Create the project structure and write the generated code."""
#     if not os.path.exists(output_dir):
#         os.makedirs(output_dir)

#     # Here we assume the generated code is a single block of code for the backend.
#     backend_file = os.path.join(output_dir, "backend", "index.js")
#     frontend_file = os.path.join(output_dir, "frontend", "App.js")
    
#     # Create directories for the backend and frontend
#     os.makedirs(os.path.dirname(backend_file), exist_ok=True)
#     os.makedirs(os.path.dirname(frontend_file), exist_ok=True)

#     # Write generated code into backend and frontend files
#     with open(backend_file, 'w') as backend:
#         backend.write(generated_code['backend'])  # Assuming the generated code is in the correct format
    
#     with open(frontend_file, 'w') as frontend:
#         frontend.write(generated_code['frontend'])  # Assuming GPT response provides frontend code separately

#     print(f"Files generated in {output_dir}")

# def create_project_files(output_dir, generated_code):
#     """Creates the project files from the generated code."""
#     if not os.path.exists(output_dir):
#         os.makedirs(output_dir)

#     # Assuming that generated_code is a block of text, we will split it manually for frontend and backend
#     # If the code generation is more complex, you'll need to adjust how you split or organize the text.
    
#     # For simplicity, let's assume the first part is for the backend and the second for the frontend
#     backend_code, frontend_code = generated_code.split("### FRONTEND CODE STARTS HERE ###")

#     # Create the backend directory and write the backend code
#     backend_file = os.path.join(output_dir, "backend", "index.js")
#     os.makedirs(os.path.dirname(backend_file), exist_ok=True)
#     with open(backend_file, 'w') as backend:
#         backend.write(backend_code)

#     # Create the frontend directory and write the frontend code
#     frontend_file = os.path.join(output_dir, "frontend", "App.js")
#     os.makedirs(os.path.dirname(frontend_file), exist_ok=True)
#     with open(frontend_file, 'w') as frontend:
#         frontend.write(frontend_code)

#     print(f"Files generated in {output_dir}")
def create_project_files(output_dir, generated_code):
    """Creates the project files from the generated code."""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Check if the marker exists
    if "### FRONTEND CODE STARTS HERE ###" in generated_code:
        # Split the code into backend and frontend sections
        backend_code, frontend_code = generated_code.split("### FRONTEND CODE STARTS HERE ###")
    else:
        # If the marker is missing, assume it's all backend code for simplicity
        backend_code = generated_code
        frontend_code = ""

    # Create the backend directory and write the backend code
    backend_file = os.path.join(output_dir, "backend", "index.js")
    os.makedirs(os.path.dirname(backend_file), exist_ok=True)
    with open(backend_file, 'w') as backend:
        backend.write(backend_code)

    # Create the frontend directory and write the frontend code (if it exists)
    if frontend_code:
        frontend_file = os.path.join(output_dir, "frontend", "App.js")
        os.makedirs(os.path.dirname(frontend_file), exist_ok=True)
        with open(frontend_file, 'w') as frontend:
            frontend.write(frontend_code)

    print(f"Files generated in {output_dir}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python main.py <prompt_file>")
        sys.exit(1)

    # Read the prompt
    prompt_file = sys.argv[1]
    prompt = read_prompt(prompt_file)

    # Call OpenAI API to generate the code
    generated_code = call_openai(prompt)

    # Print the generated code to check its structure
    print("Generated Code:")
    print(generated_code)

    # Specify the output directory
    output_directory = "generated_expense_tracker"
    
    # Create project files
    create_project_files(output_directory, generated_code)

    print(f"Project files generated in {output_directory}")
