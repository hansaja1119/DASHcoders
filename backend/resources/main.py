import sys
import numpy as np
import pandas as pd
import pickle
import os

dir_path = os.path.dirname(os.path.realpath(__file__))
model_path = os.path.join(dir_path, 'models/svc.pkl')

# load model===========================================
svc = pickle.load(open(model_path, 'rb'))


def get_predicted_value(patient_symptoms):
    # trained total symptoms count = 132
    symptomsCount = 132
    input_vector = np.zeros(symptomsCount)
    for item in patient_symptoms:
        input_vector[int(item)] = 1
    return svc.predict([input_vector])[0]

def main():
    input_data = sys.argv[1]
    patient_symptoms = input_data.split(',')

    disease = get_predicted_value(patient_symptoms)
    
    # Print the result (this will be captured by Ballerina)
    print(disease)

if __name__ == "__main__":
    main()
