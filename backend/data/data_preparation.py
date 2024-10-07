import pandas as pd

# Load the CSV file
df = pd.read_csv('./planets_large.csv')

# # Group by 'Host Star Names' and merge duplicates (you can customize how you merge the columns)
# # This will keep the first occurrence and ignore the rest for duplicate host star names
# merged_df = df.groupby('pl_name', as_index=False).first()

# # Save the merged data back to a new CSV file
# merged_df.to_csv('Planets3.csv', index=False)

# print("Duplicate rows merged by 'pl_name'.")

# Get the count of each value in the 'Host Star Names' column
# hostname_counts = df['hostname'].value_counts()

# # Display the result
# print(hostname_counts)

# replacing na values in college with No college
df["sy_gaiamag"].fillna("1", inplace = True)

df.to_csv('./Modified_Planets.csv', index=False)

print(df)
