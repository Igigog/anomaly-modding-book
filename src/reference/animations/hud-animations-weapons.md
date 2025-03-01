# Weapon HUD Animations

```admonish tip title="Formula"
animation parameter name = animation name(hands), animation name(weapon), playback speed
```

<details>
    <summary>Idle animations</summary>

| Parameter Name | Engine Class | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|:---:|---|
| anm_idle |  | Idle animation |  |  |  |
| anm_idle_empty |  | Empty magazine idle animation |  |  |  |
| anm_idle_g |  |  |  |  |  |
| anm_idle_empty_g |  |  |  |  |  |
| anm_idle_w_gl | Idle animation with grenade launcher attached to the weapon |  |  |  |  |
| anm_idle_empty_w_gl |  |  |  |  |  |
| anm_idle_aim_0 | WP_BM16 |  |  |  |  |
| anm_idle_aim_1 | WP_BM16 |  |  |  |  |
| anm_idle_aim_2 | WP_BM16 |  |  |  |  |
| anm_idle_aim |  | Aiming idle animation |  |  |  |
| anm_idle_aim_empty |  | Aiming empty magazine idle animation |  |  |  |
| anm_idle_g_aim |  |  |  |  |  |
| anm_idle_empty_g_aim |  |  |  |  |  |
| anm_idle_w_gl_aim |  |  |  |  |  |
| anm_idle_empty_w_gl_aim |  |  |  |  |  |

</details>

<details>
    <summary>Motion animations</summary>

| Parameter Name | Engine Class | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|:---:|---|
| anm_show_0 | WP_BM16 | Show animation with 0 bullet |  |  |  |
| anm_show_1 | WP_BM16 | Show animation with 1 bullet |  |  |  |
| anm_show_2 | WP_BM16 | Show animation with 2 bullet |  |  |  |
| anm_show |  | Show animation |  |  |  |
| anm_show_empty |  | Show animation with 0 bullet |  |  |  |
| anm_show_g |  |  |  |  |  |
| anm_show_empty_g |  |  |  |  |  |
| anm_show_w_gl |  |  |  |  |  |
| anm_show_empty_w_gl |  |  |  |  |  |
| anm_idle_moving |  |  |  |  |  |
| anm_idle_moving_empty |  |  |  |  |  |
| anm_idle_moving_0 | WP_BM16 |  |  |  |  |
| anm_idle_moving_1 | WP_BM16 |  |  |  |  |
| anm_idle_moving_2 | WP_BM16 |  |  |  |  |
| anm_idle_moving_g |  |  |  |  |  |
| anm_idle_moving_empty_g |  |  |  |  |  |
| anm_idle_moving_w_gl |  |  |  |  |  |
| anm_idle_moving_empty_w_gl |  |  |  |  |  |
| anm_idle_moving_w_gl_aim |  |  |  |  |  |
| anm_idle_moving_crouch |  |  |  |  |  |
| anm_idle_moving_crouch_empty |  |  |  |  |  |
| anm_idle_moving_crouch_empty_g |  |  |  |  |  |
| anm_idle_moving_crouch_empty_w_gl |  |  |  |  |  |
| anm_idle_moving_crouch_g_aim |  |  |  |  |  |
| anm_idle_moving_crouch_w_gl_aim |  |  |  |  |  |
| anm_idle_sprint_0 | WP_BM16 |  |  |  |  |
| anm_idle_sprint_1 | WP_BM16 |  |  |  |  |
| anm_idle_sprint_2 | WP_BM16 |  |  |  |  |
| anm_idle_sprint | Sprinting animation |  |  |  |  |
| anm_idle_sprint_empty |  |  |  |  |  |
| anm_idle_sprint_g |  |  |  |  |  |
| anm_idle_sprint_empty_g |  |  |  |  |  |
| anm_idle_sprint_w_gl |  |  |  |  |  |
| anm_idle_sprint_empty_w_gl |  |  |  |  |  |
| anm_bore_0 | WP_BM16 |  |  |  |  |
| anm_bore_1 | WP_BM16 |  |  |  |  |
| anm_bore_2 | WP_BM16 |  |  |  |  |
| anm_bore | Boredom animation |  |  |  |  |
| anm_bore_empty |  |  |  |  |  |
| anm_bore_g |  |  |  |  |  |
| anm_bore_empty_g |  |  |  |  |  |
| anm_bore_w_gl |  |  |  |  |  |
| anm_bore_empty_w_gl |  |  |  |  |  |
| anm_hide_0 | WP_BM16 |  |  |  |  |
| anm_hide_1 | WP_BM16 |  |  |  |  |
| anm_hide_2 | WP_BM16 |  |  |  |  |
| anm_hide | Hiding animation |  |  |  |  |
| anm_hide_empty |  |  |  |  |  |
| anm_hide_g |  |  |  |  |  |
| anm_hide_empty_g |  |  |  |  |  |
| anm_hide_w_gl |  |  |  |  |  |
| anm_hide_empty_w_gl |  |  |  |  |  |
| anm_idle_aim_moving |  |  |  |  |  |
| anm_idle_aim_moving_crouch |  |  |  |  |  |
| anm_idle_moving_g_aim |  |  |  |  |  |

</details>

<details>
    <summary>Weapon animations</summary>

| Parameter Name | Engine Class | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|:---:|---|
| anm_open | WP_RG6, WP_ASHTG |  | rg6_reload_start |  |  |
| anm_add_cartridge | WP_RG6 |  | rg6_reload, rg6_reload_wep |  |  |
| anm_close_empty | WP_RG6 |  |  |  |  |
| anm_close | WP_RG6 |  |  | rg6_reload_end |  |
| anm_reload_1 | WP_BM16<br> WeaponRevolver.h |  |  |  |  |
| anm_reload_2 | WP_BM16<br> WeaponRevolver.h |  |  |  |  |
| anm_reload_3 | WeaponRevolver.h |  |  |  |  |
| anm_reload_4 | WeaponRevolver.h |  |  |  |  |
| anm_reload_5 | WeaponRevolver.h |  |  |  |  |
| anm_reload | Reloading |  |  |  |  |
| anm_reload_empty |  |  |  |  |  |
| anm_reload_g |  |  |  |  |  |
| anm_reload_w_gl |  |  |  |  |  |
| anm_reload_empty_w_gl |  |  |  |  |  |
| anm_reload_misfire |  |  |  |  |  |
| anm_reload_misfire_w_gl |  |  |  |  |  |
| anm_attack |  |  |  |  |  |
| anm_attack2 |  |  |  |  |  |
| anm_shots |  |  |  |  |  |
| anm_shot_l |  |  |  |  |  |
| anm_shot_g_l |  |  |  |  |  |
| anm_shots_g |  |  |  |  |  |
| anm_shots_w_gl |  |  |  |  |  |
| anm_shot_w_gl_l |  |  |  |  |  |
| anm_shot_1 | WP_BM16 |  |  |  |  |
| anm_shot_2 | WP_BM16 |  |  |  |  |
| anm_switch_mode |  |  |  |  |  |
| anm_switch_mode_empty |  |  |  |  |  |
| anm_switch |  |  |  |  |  |
| anm_switch_empty |  |  |  |  |  |
| anm_switch_g |  |  |  |  |  |
| anm_switch_g_empty |  |  |  |  |  |

</details>
