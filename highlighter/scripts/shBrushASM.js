SyntaxHighlighter.brushes.custom = function()
{
  var keywords=
  'aaa aad aam aas adc add and call cbw cdqe clc cld cli cmc cmp cmps cmpsb cmpsw cwd ' +
  'daa das dec div esc hlt idiv imul in inc int into iret ja jae jb jbe jc jcxz je jg ' +
  'jge jl jle jmp jna jnae jnb jnbe jnc jne jng jnge jnl jnle jno jnp jns jnz jo jp jpe ' +
  'jpo js jz lahf lds lea les lods lodsb lodsw loop loope loopew loopne loopnew loopnz ' +
  'loopnzw loopw loopz loopzw mov movabs movs movsb movsw mul neg nop not or out pop popf ' +
  'push pushf rcl rcr ret retf retn rol ror sahf sal sar sbb scas scasb scasw shl shr stc ' +
  'std sti stos stosb stosw sub test wait xchg xlat xlatb xor bound enter ins insb insw ' +
  'leave outs outsb outsw popa pusha pushw arpl lar lsl sgdt sidt sldt smsw str verr verw ' +
  'clts lgdt lidt lldt lmsw ltr bsf bsr bt btc btr bts cdq cmpsd cwde insd iretd iretdf ' +
  'iretf jecxz lfs lgs lodsd loopd looped loopned loopnzd loopzd lss movsd movsx movsxd ' +
  'movzx outsd popad popfd pushad pushd pushfd scasd seta setae setb setbe setc sete setg ' +
  'setge setl setle setna setnae setnb setnbe setnc setne setng setnge setnl setnle setno ' +
  'setnp setns setnz seto setp setpe setpo sets setz shld shrd stosd bswap cmpxchg invd ' +
  'invlpg wbinvd xadd lock rep repe repne repnz repz cflush cpuid emms femms cmovo cmovno ' +
  'cmovb cmovc cmovnae cmovae cmovnb cmovnc cmove cmovz cmovne cmovnz cmovbe cmovna cmova ' +
  'cmovnbe cmovs cmovns cmovp cmovpe cmovnp cmovpo cmovl cmovnge cmovge cmovnl cmovle ' +
  'cmovng cmovg cmovnle cmpxchg486 cmpxchg8b loadall loadall286 ibts icebp int1 int3 ' +
  'int01 int03 iretw popaw popfw pushaw pushfw rdmsr rdpmc rdshr rdtsc rsdc rsldt rsm ' +
  'rsts salc smi smint smintold svdc svldt svts syscall sysenter sysexit sysret ud0 ud1 ' +
  'ud2 umov xbts wrmsr wrshr';
  var regesters=
  'ah al ax bh bl bp bx ch cl cr0 cr2 cr3 cr4 cs cx dh di dl dr0 dr1 dr2 dr3 dr6 dr7 ds dx ' +
  'eax ebp ebx ecx edi edx es esi esp fs gs rax rbx rcx rdx rdi rsi rbp rsp r8 r9 r10 r11 ' +
  'r12 r13 r14 r15 r8d r9d r10d r11d r12d r13d r14d r15d r8w r9w r10w r11w r12w r13w r14w ' +
  'r15w r8b r9b r10b r11b r12b r13b r14b r15b si sp ss st tr3 tr4 tr5 tr6 tr7 st0 st1 st2 ' +
  'st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0 xmm1 xmm2 xmm3 xmm4 xmm5 xmm6 ' +
  'xmm7 xmm8 xmm9 xmm10 xmm11 xmm12 xmm13 xmm14 xmm15';
  var command=
  '.186 .286 .286c .286p .287 .386 .386c .386p .387 .486 .486p .8086 .8087 .alpha .break ' +
  '.code .const .continue .cref .data .data? .dosseg .else .elseif .endif .endw .err .err1 ' +
  '.err2 .errb .errdef .errdif .errdifi .erre .erridn .erridni .errnb .errndef .errnz ' +
  '.exit .fardata .fardata? .if .lall .lfcond .list .listall .listif .listmacro ' +
  '.listmacroall .model .no87 .nocref .nolist .nolistif .nolistmacro .radix .repeat .sall ' +
  '.seq .sfcond .stack .startup .tfcond .type .until .untilcxz .while .xall .xcref .xlist ' +
  'alias align assume catstr comm comment db dd df dosseg dq dt dup dw echo else elseif ' +
  'elseif1 elseif2 elseifb elseifdef elseifdif elseifdifi elseife elseifidn elseifidni ' +
  'elseifnb elseifndef end endif endm endp ends eq equ even exitm extern externdef extrn ' +
  'for forc ge goto group gt high highword if if1 if2 ifb ifdef ifdif ifdifi ife ifidn ' +
  'ifidni ifnb ifndef include includelib instr invoke irp irpc label le length lengthof ' +
  'local low lowword lroffset lt macro mask mod .msfloat name ne offset opattr option ' +
  'org %out page popcontext proc proto ptr public purge pushcontext record repeat rept ' +
  'seg segment short size sizeof sizestr struc struct substr subtitle subttl textequ ' +
  'this title type typedef union while width resb resw resd resq rest incbin times ' +
  '%define %idefine %xdefine %xidefine %undef %assign %iassign %strlen %substr %macro ' +
  '%imacro %endmacro %rotate %if %elif %else %endif %ifdef %ifndef %elifdef %elifndef ' +
  '%ifmacro %ifnmacro %elifmacro %elifnmacro %ifctk %ifnctk %elifctk %elifnctk %ifidn ' +
  '%ifnidn %elifidn %elifnidn %ifidni %ifnidni %elifidni %elifnidni %ifid %ifnid %elifid ' +
  '%elifnid %ifstr %ifnstr %elifstr %elifnstr %ifnum %ifnnum %elifnum %elifnnum %error ' +
  '%rep %endrep %exitrep %include %push %pop %repl endstruc istruc at iend alignb %arg ' +
  '%stacksize %local %line bits use16 use32 section absolute global common cpu import ' +
  'export';

  this.regexList = [
      { regex: /^ *;.*/gm,                                               css: 'comments' },
      { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },
      { regex: new RegExp(this.getKeywords(keywords), 'gmi'),             css: 'keyword' },
      { regex: new RegExp(this.getKeywords(regesters), 'gmi'),            css: 'color3' },
      { regex: new RegExp(this.getKeywords(command), 'gmi'),            css: 'preprocessor' },
      ];
};
SyntaxHighlighter.brushes.custom.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.custom.aliases = ['ASM'];