package com.example.pubgmcompanion

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Slider
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                CompanionApp()
            }
        }
    }
}

@Composable
fun CompanionApp() {
    var sensitivity by remember { mutableFloatStateOf(55f) }
    var mode by remember { mutableStateOf("Balanced") }

    Scaffold(
        topBar = {
            TopAppBar(title = { Text("PUBGM Companion (Legal)") })
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "Aplikasi latihan setting & tips gameplay (tanpa cheat).",
                style = MaterialTheme.typography.bodyLarge
            )

            Card(modifier = Modifier.fillMaxWidth()) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("Sensitivity Helper", fontWeight = FontWeight.SemiBold, fontSize = 18.sp)
                    Text("Nilai saat ini: ${sensitivity.toInt()}%")
                    Slider(
                        value = sensitivity,
                        onValueChange = { sensitivity = it },
                        valueRange = 1f..100f
                    )
                }
            }

            Card(modifier = Modifier.fillMaxWidth()) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("Mode Preset", fontWeight = FontWeight.SemiBold, fontSize = 18.sp)
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Button(onClick = { mode = "Stability" }) { Text("Stability") }
                        Button(onClick = { mode = "Balanced" }) { Text("Balanced") }
                        Button(onClick = { mode = "Aggressive" }) { Text("Aggressive") }
                    }
                    Text("Preset aktif: $mode")
                }
            }

            Card(modifier = Modifier.fillMaxWidth()) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Text("Tips Singkat", fontWeight = FontWeight.SemiBold, fontSize = 18.sp)
                    Text("• Turunkan gyroscope jika recoil terasa liar.")
                    Text("• Naikkan ADS sedikit demi sedikit (5-10 poin).")
                    Text("• Cek setting di Training Ground sebelum Ranked.")
                }
            }
        }
    }
}
