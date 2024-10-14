public type Disease_medication record {|
    readonly string Disease;
    string Medication;
|};

public type Disease_description record {|
    readonly string Disease;
    string Description;
|};

public type Workout record {|
    readonly string Disease;
    string Workout;
|};

public type Precaution record {|
    readonly string Disease;
    string Precaution;
|};

public type Diet record {|
    readonly string Disease;
    string Diet;
|};

# these field names must be match with db table coloumn names
# + id - symptom id  
# + name - symptom name
public type Symptoms record {|
    readonly string id;
    string name;
|};
