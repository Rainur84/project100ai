import { fetchNewModels } from './utils/rssParser';
import { formatModel } from './utils/modelFormatter';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Решение для __dirname в ES-модуле
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const aiModelsPath = path.resolve(__dirname, '../src/data/aiModels.ts');

async function updateModels() {
  const newModels = await fetchNewModels();

  if (newModels.length === 0) {
    console.log('✅ Нет новых моделей для добавления.');
    return;
  }

  console.log(`🔍 Найдено новых моделей: ${newModels.length}`);
  newModels.forEach((model, index) => {
    console.log(`${index + 1}. ${model.title}`);
  });

  const formattedModels = newModels.map(formatModel);
  const aiModelsContent = fs.readFileSync(aiModelsPath, 'utf-8');

  const anchor = '// __AUTO_INSERT_MODELS__';
  if (!aiModelsContent.includes(anchor)) {
    console.error(`❌ В файле не найден якорь ${anchor}`);
    return;
  }

  const updatedContent = aiModelsContent.replace(
    anchor,
    `${formattedModels.join(',\n')},\n${anchor}`
  );

  fs.writeFileSync(aiModelsPath, updatedContent, 'utf-8');
  console.log(`✅ Успешно добавлено моделей: ${newModels.length}`);
}

updateModels().catch(console.error);