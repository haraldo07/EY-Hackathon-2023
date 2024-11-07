from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("LoadDataFrames").getOrCreate()

data1 = spark.read.csv("path/to/data1.csv", header=True, inferSchema=True)
data2 = spark.read.csv("path/to/data2.csv", header=True, inferSchema=True)

joined_data = data1.join(data2, on="CustomerID", how="inner")

joined_data.show(5)

active_members = joined_data.filter(joined_data.status == 'active')

# salary avg

avg_salary = active_members.agg({'salary': 'avg'}).collect()[0][0]
print(f"Average salary for active members: {avg_salary}")

# male female

from pyspark.sql import functions as F

avg_age_by_gender = joined_data.groupBy("gender").agg(
    F.avg("age").alias("average_age")
)

avg_age_by_gender.show()

# Register the joined_data DataFrame as a temporary SQL table
joined_data.createOrReplaceTempView("customers")

query = """
SELECT * 
FROM customers 
WHERE salary > 100000
"""

high_earning_customers = spark.sql(query)
high_earning_customers.show()

# geography

product_count_by_geography = joined_data.groupBy("geography").agg(
    F.count("product_id").alias("total_products")
)

product_count_by_geography.show()

