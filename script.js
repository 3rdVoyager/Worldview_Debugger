const WORLDVIEW_DATA = {
  secularism: {
    name: 'Secularism',
    status: 'High Risk',
    infectionLevel: 'High',
    pillars: {
      origin: 'Humans emerged through natural processes, but are now the measure of all things.',
      meaning: 'Meaning comes from human flourishing, autonomy, and self-created goals.',
      morality: 'Ethics are built through reason, empathy, and consensus.',
      destiny: 'Human progress is the best available future; death remains final.'
    },
    bugs: [
      'Borrows moral language from a worldview that has no transcendent moral source.',
      'Treats human dignity as self-evident, but cannot explain why people have inherent worth.',
      'Makes autonomy the highest good while depending on shared norms it cannot ultimately justify.',
      'Promises progress without a fixed standard for what counts as moral improvement.'
    ],
    christianPatch: [
      'Human dignity is rooted in the image of God, not social agreement.',
      'Moral truth is anchored in God’s character, giving ethics objective weight.',
      'Human flourishing is real, but it must be ordered under the Creator’s design.',
      'Hope is not vague progress, but redemption and resurrection in Christ.'
    ]
  },
  marxism: {
    name: 'Marxism',
    status: 'Active Corruption',
    infectionLevel: 'Severe',
    pillars: {
      origin: 'History is driven by material conditions and class conflict.',
      meaning: 'Meaning is found in collective struggle and the advancement of the oppressed class.',
      morality: 'Moral categories are tools shaped by economic power structures.',
      destiny: 'A classless utopia is expected through revolution and redistribution.'
    },
    bugs: [
      'Claims to reveal objective truth while reducing all truth claims to class interests.',
      'Explains oppression economically but underestimates the depth of sin, pride, and corruption.',
      'Utopian promises repeatedly collapse under the weight of coercion and human fallenness.',
      'Cannot provide a stable reason that one class must be treated as morally superior to another.'
    ],
    christianPatch: [
      'Scripture recognizes injustice, but also identifies sin as the root problem in every human heart.',
      'Justice matters because God is righteous and condemns oppression.',
      'No political system can save humanity; only Christ can transform hearts and communities.',
      'The kingdom of God is not produced by revolution, but received through redemption.'
    ]
  },
  postmodernism: {
    name: 'Postmodernism',
    status: 'High Instability',
    infectionLevel: 'Moderate',
    pillars: {
      origin: 'Reality is interpreted through language, power, and competing narratives.',
      meaning: 'Meaning is fluid, negotiated, and dependent on context.',
      morality: 'Moral claims are socially constructed and tied to power relations.',
      destiny: 'There is no final story, only local narratives that rise and fall.'
    },
    bugs: [
      'If all truth is relative, that claim itself cannot be universal.',
      'Deconstructs every metanarrative while still relying on moral outrage against oppression.',
      'Cannot explain why justice should matter if morality is only constructed.',
      'Leaves meaning unstable, because interpretation has no final anchor.'
    ],
    christianPatch: [
      'Truth is not created by language; it is revealed by the God who made reality.',
      'Meaning is stable because creation has purpose and history has direction.',
      'Justice is more than a social construct because God is holy and righteous.',
      'The gospel is the true metanarrative that explains human brokenness and redemption.'
    ]
  },
  newSpirituality: {
    name: 'New Spirituality',
    status: '',
    infectionLevel: 'Moderate',
    pillars: {
      origin: 'Reality is a blend of energy, consciousness, and personal intuition.',
      meaning: 'Meaning is discovered by self-expression, inner peace, and spiritual growth.',
      morality: 'Morality is whatever aligns with authentic inner desire and harm reduction.',
      destiny: 'The self evolves through cycles, awakening, and expanded awareness.'
    },
    bugs: [
      'Treats inner feeling as a reliable guide without testing whether desires are truthful.',
      'Combines incompatible spiritual claims into a flexible but unstable system.',
      'Cannot explain guilt, evil, or brokenness beyond blocked energy or lower consciousness.',
      'Offers transformation without a clear account of sin, forgiveness, or reconciliation.'
    ],
    christianPatch: [
      'True spiritual life begins with the living God, not self-generated energy.',
      'Human brokenness is deeper than imbalance; it is sin that requires forgiveness.',
      'Authenticity matters, but it must be shaped by truth rather than desire alone.',
      'Transformation is possible through the Holy Spirit, who renews from the inside out.'
    ]
  },
  islam: {
    name: 'Islam',
    status: 'Doctrinal Tension',
    infectionLevel: 'High',
    pillars: {
      origin: 'Allah created all things by will and command.',
      meaning: 'Meaning is found in submission to Allah and faithful obedience.',
      morality: 'Morality is revealed by divine command and prophetic example.',
      destiny: 'Final judgment determines paradise or punishment.'
    },
    bugs: [
      'Affirms divine transcendence but offers no fully personal, relational God as eternally triune love.',
      'Places heavy weight on works and submission while leaving assurance unstable.',
      'Rejects the crucifixion and resurrection, which removes the center of Christian atonement and hope.',
      'Cannot reconcile a holy standard with universal human failure apart from grace.'
    ],
    christianPatch: [
      'God is not only one, but triune, and therefore eternally loving and relational.',
      'Salvation is by grace through faith, not by human merit or performance.',
      'The cross and resurrection provide real atonement, forgiveness, and victory over death.',
      'Assurance rests on Christ’s finished work, not fragile self-justification.'
    ]
  }
};

const worldviewList = document.getElementById('worldviewList');
const activeName = document.getElementById('activeName');
const activeStatus = document.getElementById('activeStatus');
const pillarsContainer = document.getElementById('pillars');
const analyzeBtn = document.getElementById('analyzeBtn');
const patchBtn = document.getElementById('patchBtn');
const loadingState = document.getElementById('loadingState');
const bugList = document.getElementById('bugList');
const consoleOutput = document.getElementById('consoleOutput');
const consoleBox = document.getElementById('consoleBox');
const globalStatus = document.getElementById('globalStatus');
const terminalToggle = document.getElementById('terminalToggle');
const terminalPanel = document.getElementById('terminalPanel');
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');

const worldviewKeys = Object.keys(WORLDVIEW_DATA);
let activeKey = worldviewKeys[0];
let patchApplied = false;
let analyzeTimer = null;

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderWorldviewSelector() {
  worldviewList.innerHTML = worldviewKeys.map((key) => {
    const worldview = WORLDVIEW_DATA[key];
    return `
      <li>
        <button class="worldview-item ${key === activeKey ? 'active' : ''}" data-key="${key}" aria-pressed="${key === activeKey}">
          <span class="worldview-name">${worldview.name}</span>
          <span class="worldview-meta">${worldview.status} · ${worldview.infectionLevel} infection</span>
        </button>
      </li>
    `;
  }).join('');

  worldviewList.querySelectorAll('.worldview-item').forEach((item) => {
    item.addEventListener('click', () => setActiveView(item.dataset.key));
  });
}

function renderPillars(worldview) {
  const pillarEntries = patchApplied
    ? worldview.christianPatch.map((value, index) => [
        ['Origin', 'Meaning', 'Morality', 'Destiny'][index],
        value
      ])
    : Object.entries(worldview.pillars);

  pillarsContainer.innerHTML = pillarEntries.map(([label, value]) => `
    <article class="pillar-box">
      <span class="pillar-label">${label}</span>
      <p class="pillar-text">${escapeHtml(value)}</p>
    </article>
  `).join('');
}

function renderConsole(worldview) {
  consoleOutput.textContent = patchApplied
    ? `${worldview.name} patched. Running on restored doctrine set.`
    : `${worldview.name} selected. Use Analyze System to inspect the failure points.`;

  loadingState.classList.add('hidden');
  bugList.classList.add('hidden');
  bugList.innerHTML = '';
}

function updateGlobalStatus() {
  if (patchApplied) {
    globalStatus.innerHTML = '<span class="status-dot"></span><span>System Restored</span>';
    activeStatus.textContent = 'Restored';
  } else {
    globalStatus.innerHTML = '<span class="status-dot"></span><span>Diagnostic Mode</span>';
    activeStatus.textContent = WORLDVIEW_DATA[activeKey].status;
  }
}

function setActiveView(key) {
  activeKey = key;
  patchApplied = false;
  document.body.classList.remove('patched');
  renderWorldviewSelector();
  const worldview = WORLDVIEW_DATA[key];
  activeName.textContent = worldview.name;
  renderPillars(worldview);
  renderConsole(worldview);
  updateGlobalStatus();
  patchBtn.disabled = false;
}

function showAnalysis() {
  const worldview = WORLDVIEW_DATA[activeKey];
  consoleBox.classList.add('scan-pulse');
  loadingState.classList.remove('hidden');
  bugList.classList.add('hidden');
  bugList.innerHTML = '';
  consoleOutput.textContent = 'Scanning for logical fallacies...';
  analyzeBtn.disabled = true;

  clearTimeout(analyzeTimer);
  analyzeTimer = setTimeout(() => {
    loadingState.classList.add('hidden');
    bugList.innerHTML = `
      <strong>Detected bugs</strong>
      <ul>${worldview.bugs.map((bug) => `<li>${escapeHtml(bug)}</li>`).join('')}</ul>
    `;
    bugList.classList.remove('hidden');
    consoleOutput.textContent = `${worldview.name} analyzed. Review the highlighted faults below.`;
    consoleBox.classList.remove('scan-pulse');
    analyzeBtn.disabled = false;
  }, 1200);
}

function applyPatch() {
  const worldview = WORLDVIEW_DATA[activeKey];
  patchApplied = true;
  patchBtn.disabled = true;
  document.body.classList.add('patched');
  consoleBox.classList.add('recode-flash');
  consoleOutput.textContent = 'Applying biblical patch...';

  setTimeout(() => {
    renderPillars(worldview);
    updateGlobalStatus();
    consoleOutput.textContent = `${worldview.name} has been patched with biblical response text.`;
    bugList.classList.add('hidden');
    bugList.innerHTML = '';
    consoleBox.classList.remove('recode-flash');
  }, 650);
}

function appendTerminalLine(text, kind = 'output') {
  const line = document.createElement('p');
  line.className = 'terminal-line';
  line.textContent = text;
  terminalOutput.appendChild(line);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  return line;
}

function renderStatusTable() {
  const rows = worldviewKeys.map((key) => {
    const worldview = WORLDVIEW_DATA[key];
    return `${worldview.name.padEnd(20)} | ${worldview.status.padEnd(22)} | ${worldview.infectionLevel}`;
  });
  return ['Worldview            | Status                 | Infection', '-----------------------------------------------------------', ...rows].join('\n');
}

function handleTerminalCommand(rawCommand) {
  const command = rawCommand.trim();
  if (!command) return;

  appendTerminalLine(`> ${command}`);

  if (command === 'help') {
    appendTerminalLine('help');
    appendTerminalLine('status --all');
    appendTerminalLine('patch --[worldview]');
    return;
  }

  if (command === 'status --all') {
    appendTerminalLine(renderStatusTable());
    return;
  }

  if (command.startsWith('patch --')) {
    const target = command.replace('patch --', '').trim().toLowerCase();
    const matchKey = worldviewKeys.find((key) => WORLDVIEW_DATA[key].name.toLowerCase() === target || key === target);
    if (!matchKey) {
      appendTerminalLine(`Unknown worldview: ${target}`);
      return;
    }

    activeKey = matchKey;
    setActiveView(matchKey);
    applyPatch();
    appendTerminalLine(`Patch executed for ${WORLDVIEW_DATA[matchKey].name}.`);
    return;
  }

  appendTerminalLine('Unknown command. Type help for available commands.');
}

function initTerminal() {
  terminalOutput.innerHTML = '';
  appendTerminalLine('Terminal online. Type help for commands.');
  terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      handleTerminalCommand(event.target.value);
      event.target.value = '';
    }
  });

  terminalToggle.addEventListener('click', () => {
    const hidden = terminalPanel.classList.toggle('hidden');
    terminalPanel.setAttribute('aria-hidden', String(hidden));
    if (!hidden) {
      terminalInput.focus();
    }
  });
}

analyzeBtn.addEventListener('click', showAnalysis);
patchBtn.addEventListener('click', applyPatch);

renderWorldviewSelector();
setActiveView(activeKey);
initTerminal();
