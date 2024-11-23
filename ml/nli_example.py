from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")

model_name = "MoritzLaurer/mDeBERTa-v3-base-xnli-multilingual-nli-2mil7"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

premise = """
Отбор на предоставление грантов субъектам малого и среднего предпринимательства, включенным в реестр социальных предприятий,
или субъектам малого и среднего предпринимательства, созданным физическими лицами в возрасте до 25 лет включительно
"""
hypothesis = "В тексте упоминаются меры поддержки бизнеса"

input = tokenizer(premise, hypothesis, truncation=True, return_tensors="pt")
output = model(input["input_ids"].to(device))  # device = "cuda:0" or "cpu"
prediction = torch.softmax(output["logits"][0], -1).tolist()
label_names = ["entailment", "neutral", "contradiction"]
prediction = {name: pred for pred, name in zip(prediction, label_names)}
print(premise, end='\n\n-----\n\n')
print(hypothesis, end='\n\n-----\n\n')
print(prediction)
