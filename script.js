const WORLDVIEW_DATA = {
  secularism: {
    name: 'Secularism',
    status: 'High Risk',
    risk: 'High',
    damage_percentage: 72,
    threats: [],
    disciplines: {
      Theology: 'Atheism',
      Philosophy: 'Reason is detached from any transcendent ground for objective truth.',
      Ethics: 'Moral norms are negotiated by consensus and utility.',
      Biology: 'Human life is reduced to advanced material processes only.',
      Psychology: 'Identity is framed as self-authored without spiritual accountability.',
      Sociology: 'Institutions are valued mainly for social efficiency and stability.',
      Law: 'Law is grounded in procedural rights more than divine justice.',
      Politics: 'Authority is justified by popular will and pragmatic outcomes.',
      Economics: 'Markets and consumption are treated as primary engines of meaning.',
      History: 'History is interpreted as progress without providential direction.'
    },
    bugs: [
      'Borrows moral language from a worldview that has no transcendent moral source.',
      'Treats human dignity as self-evident, but cannot explain why people have inherent worth.',
      'Makes autonomy the highest good while depending on shared norms it cannot ultimately justify.',
      'Promises progress without a fixed standard for what counts as moral improvement.'
    ],
    christianPatch: {
      Theology: 'God is Lord over all life and knowledge, not a private add-on.',
      Philosophy: 'Truth is coherent because reality is grounded in the Creator.',
      Ethics: 'Moral law is objective because it reflects God’s holy character.',
      Biology: 'Human beings are embodied image-bearers with irreducible dignity.',
      Psychology: 'Personhood is found in Christ, where identity and purpose are restored.',
      Sociology: 'Society flourishes when love of God and neighbor shapes institutions.',
      Law: 'Justice is measured by righteousness, mercy, and truth before God.',
      Politics: 'Government is accountable to God and limited by moral law.',
      Economics: 'Stewardship, generosity, and honesty govern the use of resources.',
      History: 'History has direction under God and culminates in Christ’s kingdom.'
    }
  },
  marxism: {
    name: 'Marxism',
    status: 'Active Corruption',
    risk: 'Severe',
    damage_percentage: 84,
    threats: [],
    disciplines: {
      Theology: 'Religion is recast as ideology that masks class power.',
      Philosophy: 'Dialectical materialism is treated as the final explanatory framework.',
      Ethics: 'Morality is subordinated to class struggle and revolutionary outcomes.',
      Biology: 'Human nature is viewed as primarily shaped by material conditions.',
      Psychology: 'Consciousness is interpreted as a byproduct of economic structures.',
      Sociology: 'All institutions are analyzed through oppressor-oppressed dynamics.',
      Law: 'Law is seen mainly as an instrument of ruling-class control.',
      Politics: 'Power transfer through revolution is prioritized over reform.',
      Economics: 'Centralized ownership is treated as the cure for injustice.',
      History: 'History is framed as inevitable class conflict toward utopia.'
    },
    bugs: [
      'Claims to reveal objective truth while reducing all truth claims to class interests.',
      'Explains oppression economically but underestimates the depth of sin, pride, and corruption.',
      'Utopian promises repeatedly collapse under the weight of coercion and human fallenness.',
      'Cannot provide a stable reason that one class must be treated as morally superior to another.'
    ],
    christianPatch: {
      Theology: 'God, not class conflict, is ultimate over history and judgment.',
      Philosophy: 'Reality is more than matter; persons, truth, and morality are real.',
      Ethics: 'Justice must reject oppression without excusing hatred or vengeance.',
      Biology: 'Human nature is fallen across all classes, not innocent by position.',
      Psychology: 'The heart needs repentance and renewal, not only social inversion.',
      Sociology: 'Communities are healed by reconciliation, service, and covenant faithfulness.',
      Law: 'Law should restrain evil and protect dignity without becoming tyranny.',
      Politics: 'Power must be accountable, limited, and oriented to the common good.',
      Economics: 'Work, property, generosity, and justice are held together in stewardship.',
      History: 'Human hope is not utopia by force but redemption through Christ.'
    }
  },
  postmodernism: {
    name: 'Postmodernism',
    status: 'High Instability',
    risk: 'Moderate',
    damage_percentage: 55,
    threats: [],
    disciplines: {
      Theology: 'All theological claims are treated as community constructions.',
      Philosophy: 'Certainty is rejected and metanarratives are deconstructed.',
      Ethics: 'Moral language is often reduced to preference and power location.',
      Biology: 'Embodied realities are interpreted through fluid identity frameworks.',
      Psychology: 'Selfhood is fragmented across narratives and social scripts.',
      Sociology: 'Social analysis centers on discourse, power, and identity blocs.',
      Law: 'Legal reasoning is viewed as contingent negotiation among groups.',
      Politics: 'Political legitimacy shifts with narrative coalitions and critique.',
      Economics: 'Economic structures are interpreted mainly as power narratives.',
      History: 'History is treated as competing stories without final coherence.'
    },
    bugs: [
      'If all truth is relative, that claim itself cannot be universal.',
      'Deconstructs every metanarrative while still relying on moral outrage against oppression.',
      'Cannot explain why justice should matter if morality is only constructed.',
      'Leaves meaning unstable, because interpretation has no final anchor.'
    ],
    christianPatch: {
      Theology: 'God reveals truth that stands above shifting discourse communities.',
      Philosophy: 'Objective truth exists because reality is grounded in God.',
      Ethics: 'Good and evil are real because God is holy and just.',
      Biology: 'Embodiment is a gift of creation, not a disposable construct.',
      Psychology: 'The self is unified in relationship to God and neighbor.',
      Sociology: 'Communities are called to truthful speech and covenantal love.',
      Law: 'Law can pursue justice because moral standards are not arbitrary.',
      Politics: 'Public life can seek truth and justice beyond tribal narratives.',
      Economics: 'Economic life is accountable to truth, fairness, and stewardship.',
      History: 'History has coherence in creation, fall, redemption, and restoration.'
    }
  },
  newSpirituality: {
    name: 'New Spirituality',
    status: 'Cloud System Overload',
    risk: 'Moderate',
    damage_percentage: 48,
    threats: [],
    disciplines: {
      Theology: 'The divine is personalized into flexible spiritual energy.',
      Philosophy: 'Contradictory truth claims are blended without hard evaluation.',
      Ethics: 'Authenticity is prioritized over objective moral accountability.',
      Biology: 'Physical limits are often reframed as lower spiritual vibration.',
      Psychology: 'Inner experience is treated as the highest authority for truth.',
      Sociology: 'Community is optional and often replaced by curated spirituality.',
      Law: 'Moral boundaries are viewed as restrictive to personal awakening.',
      Politics: 'Public ethics are minimized in favor of private transformation.',
      Economics: 'Spirituality is frequently commodified through practices and products.',
      History: 'Traditions are mined selectively with little historical accountability.'
    },
    bugs: [
      'Treats inner feeling as a reliable guide without testing whether desires are truthful.',
      'Combines incompatible spiritual claims into a flexible but unstable system.',
      'Cannot explain guilt, evil, or brokenness beyond blocked energy or lower consciousness.',
      'Offers transformation without a clear account of sin, forgiveness, or reconciliation.'
    ],
    christianPatch: {
      Theology: 'God is personal, holy, and self-revealing, not an impersonal force.',
      Philosophy: 'Truth must be coherent and tested, not merely felt.',
      Ethics: 'Love and holiness define goodness beyond personal preference.',
      Biology: 'Bodies matter as created gifts, awaiting resurrection hope.',
      Psychology: 'Healing includes repentance, forgiveness, and renewed desires.',
      Sociology: 'Faith matures in accountable community, not isolated spirituality.',
      Law: 'Moral boundaries protect life, dignity, and neighbor-love.',
      Politics: 'Public life requires justice and mercy, not only private serenity.',
      Economics: 'Worship is not a commodity; stewardship resists spiritual consumerism.',
      History: 'God works in real history, culminating in Christ’s incarnation and resurrection.'
    }
  },
  islam: {
    name: 'Islam',
    status: 'Doctrinal Tension',
    risk: 'High',
    damage_percentage: 63,
    threats: [],
    disciplines: {
      Theology: 'God is one, yet the Trinity and incarnation are denied.',
      Philosophy: 'Revelation is prioritized, but assurance of atonement remains unresolved.',
      Ethics: 'Obedience is central, yet grace and transformed sonship are unclear.',
      Biology: 'Human nature is accountable to God but not healed through union with Christ.',
      Psychology: 'Assurance is often fragile because final standing depends on weighing deeds.',
      Sociology: 'Community identity is strong, but gospel reconciliation is absent.',
      Law: 'Divine law is central, yet the cross as fulfillment of justice is rejected.',
      Politics: 'Religion and governance intertwine without a robust church-state distinction.',
      Economics: 'Economic ethics are present, but redemption logic is not Christ-centered.',
      History: 'Jesus is honored prophetically while crucifixion-resurrection claims are denied.'
    },
    bugs: [
      'Affirms divine transcendence but offers no fully personal, relational God as eternally triune love.',
      'Places heavy weight on works and submission while leaving assurance unstable.',
      'Rejects the crucifixion and resurrection, which removes the center of Christian atonement and hope.',
      'Cannot reconcile a holy standard with universal human failure apart from grace.'
    ],
    christianPatch: {
      Theology: 'God is one being in three persons: Father, Son, and Holy Spirit.',
      Philosophy: 'Truth is centered in Christ, where justice and mercy meet coherently.',
      Ethics: 'Obedience flows from grace, not from fear-driven self-justification.',
      Biology: 'Humanity is restored through Christ’s incarnation, death, and resurrection.',
      Psychology: 'Believers can have assurance because salvation rests on Christ’s finished work.',
      Sociology: 'The church is a reconciled people from every nation under one Lord.',
      Law: 'The law is fulfilled in Christ, who bears judgment and grants righteousness.',
      Politics: 'Earthly authority is limited under God, and conscience is accountable to Christ.',
      Economics: 'Generosity and justice flow from grace and stewardship before God.',
      History: 'The gospel stands on historical crucifixion and resurrection, not symbolic myth.'
    }
  }
};

const worldviewList = document.getElementById('worldviewList');
const activeName = document.getElementById('activeName');
const activeStatus = document.getElementById('activeStatus');
const disciplinesContainer = document.getElementById('disciplines');
const analyzeBtn = document.getElementById('analyzeBtn');
const patchBtn = document.getElementById('patchBtn');
const loadingState = document.getElementById('loadingState');
const bugList = document.getElementById('bugList');
const consoleOutput = document.getElementById('consoleOutput');
const consoleBox = document.getElementById('consoleBox');
const globalStatus = document.getElementById('globalStatus');
const terminalPanel = document.getElementById('terminalPanel');
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');

const worldviewKeys = Object.keys(WORLDVIEW_DATA);
let activeKey = worldviewKeys[0];
let patchApplied = false;
let analyzeTimer = null;
let uiMode = 'ui'; // 'ui' = full interface, 'dev' = terminal-only

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
              <div class="worldview-badges">
                <span class="bubble bubble-risk">Risk: ${escapeHtml(String(worldview.risk || ''))}</span>
                <span class="bubble bubble-status">Status: ${escapeHtml(String(worldview.status || ''))}</span>
                <span class="bubble bubble-damage">Damage: ${escapeHtml(String(worldview.damage_percentage || '0'))}%</span>
                ${worldview.threats && worldview.threats.length ? worldview.threats.map((t) => `<span class="bubble bubble-threat">${escapeHtml(t)}</span>`).join('') : ''}
              </div>
            </button>
      </li>
    `;
  }).join('');

  worldviewList.querySelectorAll('.worldview-item').forEach((item) => {
    item.addEventListener('click', () => setActiveView(item.dataset.key));
  });
}

function renderDisciplines(worldview) {
  const disciplineEntries = patchApplied
    ? Object.entries(worldview.christianPatch)
    : Object.entries(worldview.disciplines);

  disciplinesContainer.innerHTML = disciplineEntries.map(([label, value]) => `
    <article class="discipline-box">
      <span class="discipline-label">${label}</span>
      <p class="discipline-text">${escapeHtml(value)}</p>
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
    // show a clickable UI mode toggle that switches between UI and Developer (terminal-only) modes
    const label = uiMode === 'ui' ? 'Developer Mode':'User Interface Mode';
    globalStatus.innerHTML = `<button id="uiModeToggle" class="status-toggle" aria-pressed="${uiMode === 'dev'}"><span class="status-dot"></span><span>${label}</span></button>`;
    activeStatus.textContent = WORLDVIEW_DATA[activeKey].status;

    // wire the button (if present) to toggle the terminal panel
    const uiBtn = document.getElementById('uiModeToggle');
    if (uiBtn) {
      uiBtn.addEventListener('click', () => {
        // toggle mode
        uiMode = uiMode === 'ui' ? 'dev' : 'ui';
        applyUIMode();
      });
    }
  }
}

function applyUIMode() {
  const selectorPanel = document.querySelector('.selector-panel');
  const workspace = document.querySelector('.workspace');
  if (uiMode === 'dev') {
    // hide main UI, show terminal only
    if (selectorPanel) selectorPanel.classList.add('hidden');
    if (workspace) workspace.classList.add('hidden');
    terminalPanel.classList.remove('hidden');
    terminalPanel.setAttribute('aria-hidden', 'false');
    document.getElementById('uiModeToggle')?.setAttribute('aria-pressed', 'true');
    terminalInput.focus();
  } else {
    // show full UI, hide terminal panel
    if (selectorPanel) selectorPanel.classList.remove('hidden');
    if (workspace) workspace.classList.remove('hidden');
    terminalPanel.classList.add('hidden');
    terminalPanel.setAttribute('aria-hidden', 'true');
    document.getElementById('uiModeToggle')?.setAttribute('aria-pressed', 'false');
  }
  // re-render status to update button label
  renderWorldviewSelector();
  updateGlobalStatus();
}

function setActiveView(key) {
  activeKey = key;
  patchApplied = false;
  document.body.classList.remove('patched');
  renderWorldviewSelector();
  const worldview = WORLDVIEW_DATA[key];
  activeName.textContent = worldview.name;
  renderDisciplines(worldview);
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
    renderDisciplines(worldview);
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
    const threats = worldview.threats ? worldview.threats.join(', ') : '';
    return `${worldview.name.padEnd(20)} | ${String(worldview.status).padEnd(22)} | ${String(worldview.risk).padEnd(8)} | ${String(worldview.damage_percentage).padEnd(6)} | ${threats}`;
  });
  return ['Worldview            | Status                 | Risk     | Damage | Threats', '-----------------------------------------------------------------------------------------', ...rows].join('\n');
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

}

analyzeBtn.addEventListener('click', showAnalysis);
patchBtn.addEventListener('click', applyPatch);

renderWorldviewSelector();
setActiveView(activeKey);
initTerminal();
