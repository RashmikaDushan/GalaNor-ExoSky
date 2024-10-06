#!/usr/bin/env python
# coding: utf-8

# ## Data Preparation - ExoSky 

# In[28]:


#Necessary libraries
import numpy as np
import pandas as pd


# In[30]:


#Loading the exoplanet dataset
data = pd.read_csv('ExoPlanets.csv')


# In[31]:


# Basic info about the dataset
print("\nDataset Information:")
print(data.info())


# In[20]:


# Display the first few rows of the dataframe
print("First few rows of the dataset:")
print(data.head())


# In[23]:


# Get all the column names
all_columns = data.columns.tolist()

print("List of all Column Names:")
for column in all_columns:
    print(column)


# In[41]:


#Index column
data.rename(columns={data.columns[0]: 'index'}, inplace=True)

#Columns to keep
columns_to_keep = ["pl_name", "pl_letter", "hostname", "gaia_id", "disc_locale", "ra", "dec",
                   "pl_orbper", "st_spectype", "pl_rade", "pl_masse", "st_lum",
                   "sy_dist", "sky_coord.ra", "sky_coord.dec" ]

# Select only the specified columns
data_filtered = data[columns_to_keep]
print(data_filtered.head())


# In[42]:


#Rpeated occurrences of each unique exoplanet
pl_name_counts = data_filtered['pl_name'].value_counts()

print(pl_name_counts[pl_name_counts > 1])


# In[43]:


#For repeated columns
columns_to_average = ['ra', 'dec', 'sky_coord.ra', 'sky_coord.dec']

data_averaged = data_filtered.groupby('pl_name', as_index=False).agg({
    'ra': 'mean',
    'dec': 'mean',
    'sky_coord.ra': 'mean',
    'sky_coord.dec': 'mean',
})

#Merging the averaged data back with the non-duplicated rows from the original dataset'
data_non_duplicates = data_filtered.drop_duplicates(subset='pl_name', keep=False)

#Append the averaged rows back to the non-duplicated ones
data_final = pd.concat([data_non_duplicates, data_averaged], ignore_index=True)

print(data_final.head())


# In[44]:


# Basic info about the new dataset
print("\nDataset Information:")
print(data_final.info())


# In[45]:


#null values in each column
print("\nColumns with null values and their counts:")
null_values = data_final.isnull().sum()
print(null_values)


# In[46]:


#pl_letter
data_final['pl_letter'].fillna('Unknown', inplace=True)

#hostname
data_final['hostname'].fillna('Unknown', inplace=True)

#gaia_id
data_final['gaia_id'].fillna('Unknown', inplace=True)

#disc_locale
data_final['disc_locale'].fillna('Ground', inplace=True)

#pl_orbper
data_final['pl_orbper'].interpolate(method='linear', inplace=True)

#st_spectype
data_final['st_spectype'].fillna('Unknown', inplace=True)


# In[47]:


#pl_rade
data_final['pl_rade'] = data_final.groupby('hostname')['pl_rade'].transform(lambda x: x.fillna(x.mean()))
global_mean_rade = data_final['pl_rade'].mean()
data_final['pl_rade'].fillna(global_mean_rade, inplace=True)

#pl_masse
data_final['pl_masse'] = data_final.groupby('hostname')['pl_masse'].transform(lambda x: x.fillna(x.mean()))
global_mean_masse = data_final['pl_masse'].mean()
data_final['pl_masse'].fillna(global_mean_masse, inplace=True)

#st_lum
data_final['st_lum'] = data_final.groupby('hostname')['st_lum'].transform(lambda x: x.fillna(x.mean()))
global_mean_st_lum = data_final['st_lum'].mean()
data_final['st_lum'].fillna(global_mean_st_lum, inplace=True)


# In[49]:


#final dataset
data_final.to_csv('ExoPlanets_final.csv', index=False)


# In[ ]:




